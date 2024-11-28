import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../src/screens/LogInScreen';
import { useGlobalState } from '../src/StateContext/UserContext'
import { Alert } from 'react-native';

jest.mock('../src/StateContext/UserContext', () => ({
  useGlobalState: jest.fn(),
}));
jest.mock('../src/utils/getBaseURL', () => jest.fn(() => 'http://localhost:3000'));
jest.spyOn(Alert, 'alert'); 
global.fetch = jest.fn(); 
const navigation = { navigate: jest.fn() };

describe('Login Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all elements correctly', () => {
    (useGlobalState as any).mockReturnValue({
      username: '',
      setUsername: jest.fn(),
      password: '',
      setPassword: jest.fn(),
    });

    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);
    
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText("Don't have an account? Register")).toBeTruthy();
  });

  it('updates username and password', () => {
    const setUsername = jest.fn();
    const setPassword = jest.fn();

    (useGlobalState as any).mockReturnValue({
      username: '',
      setUsername,
      password: '',
      setPassword,
    });

    const { getByPlaceholderText } = render(<Login navigation={navigation} />);

    fireEvent.changeText(getByPlaceholderText('Username'), 'Rekha');
    fireEvent.changeText(getByPlaceholderText('Password'), '1234');

    expect(setUsername).toHaveBeenCalledWith('Rekha');
    expect(setPassword).toHaveBeenCalledWith('1234');
  });

  it('handles successful login and navigates to tabs', async () => {
    (useGlobalState as any).mockReturnValue({
      username: 'Rekha',
      setUsername: jest.fn(),
      password: '1234',
      setPassword: jest.fn(),
    });

    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ message: 'Login successful' }),
      })
    );

    const { getByText } = render(<Login navigation={navigation} />);

    fireEvent.press(getByText('Login'));

    await waitFor(() => expect(fetch).toHaveBeenCalledWith(
      'http://localhost:3000/users/getCredentials',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'Rekha', password: '1234' }),
      })
    ));

    expect(navigation.navigate).toHaveBeenCalledWith('tabs');
  });

  it('handles incorrect password error response', async () => {
    (useGlobalState as any).mockReturnValue({
      username: 'Rekha',
      setUsername: jest.fn(),
      password: '1234',
      setPassword: jest.fn(),
    });

    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 401,
        json: () => Promise.resolve({ message: 'Password is not correct' }),
      })
    );

    const { getByText } = render(<Login navigation={navigation} />);

    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3000/users/getCredentials',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: 'Rekha', password: '1234' }),
        })
      );
    });
  });

  it('navigates to the Register screen when the button is pressed', () => {
    const { getByText } = render(<Login navigation={navigation} />);

    const registerButton = getByText("Don't have an account? Register");
    fireEvent.press(registerButton);

    expect(navigation.navigate).toHaveBeenCalledWith('Register');
  });

  it('shows alert when the username is invalid', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 404,
      json: jest.fn().mockResolvedValue({ message: 'User not found' }), 
    });
    const { getByPlaceholderText, getByText } = render(<Login navigation={{ navigate: jest.fn() }} />);
    fireEvent.changeText(getByPlaceholderText('Username'), 'invalidUser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByText('Login'));
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Username is invalid');
    });
  });
});

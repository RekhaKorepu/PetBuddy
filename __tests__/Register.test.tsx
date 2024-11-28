import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Register from '../src/screens/RegisterScreen';
import { Alert } from 'react-native';

jest.spyOn(console, 'warn').mockImplementation(() => {}); 
jest.spyOn(Alert, 'alert'); 
global.fetch = jest.fn(); 

describe('Register Screen', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all elements correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Register navigation={{ navigate: jest.fn() }} />);
    
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByPlaceholderText('confirm password')).toBeTruthy();
    expect(getByPlaceholderText('email')).toBeTruthy();
    expect(getByPlaceholderText('mobile')).toBeTruthy();
    expect(getByPlaceholderText('address')).toBeTruthy();
    expect(getByText('Register')).toBeTruthy();
  });

  

  it('shows a warning if passwords do not match', () => {
    const { getByPlaceholderText, getByText } = render(<Register navigation={{ navigate: jest.fn() }} />);
    
    fireEvent.changeText(getByPlaceholderText('Password'), '1234');
    fireEvent.changeText(getByPlaceholderText('confirm password'), '4567');
    fireEvent.press(getByText('Register'));

    expect(console.warn).toHaveBeenCalledWith('Passwords do not match.');
  });

  it('handles successful registration and navigates to tabs', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ status: 201 });
    const navigate = jest.fn();
    
    const { getByText } = render(<Register navigation={{ navigate }} />);
    fireEvent.press(getByText('Register'));
    
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('User registered successfully');
      expect(navigate).toHaveBeenCalledWith('tabs');
    });
  });

  it('shows alert when username already exists', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ status: 409 });
    
    const { getByText } = render(<Register navigation={{ navigate: jest.fn() }} />);
    fireEvent.press(getByText('Register'));
    
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Username already exists');
    });
  });

  it('shows alert when registration fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ status: 500 });
    
    const { getByText } = render(<Register navigation={{ navigate: jest.fn() }} />);
    fireEvent.press(getByText('Register'));
    
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('User registration failed');
    });
  });

  it('navigates to the Login screen when the button is pressed', () => {
    const navigate = jest.fn();
    const { getByText } = render(<Register navigation={{ navigate }} />);
    
    fireEvent.press(getByText('Already have a account? Login'));
    expect(navigate).toHaveBeenCalledWith('Login');
  });
});


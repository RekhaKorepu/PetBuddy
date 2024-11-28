import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Welcome } from '../src/screens/WelcomeScreen';

describe('Welcome Screen', () => {
  it('renders elements correctly', () => {
    const navigation = { navigate: jest.fn() }; 
    
    const { getByText, getByTestId } = render(<Welcome navigation={navigation} />);
    expect(getByText('Hey! Welcome')).toBeTruthy();
    expect(getByText("while you sit and stay - we'll go out and play")).toBeTruthy();
    const button = getByText('Get started');
    expect(button).toBeTruthy();
  });
  
  it('navigates to the Login screen on button press', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<Welcome navigation={navigation} />);
    const button = getByText('Get started');
    fireEvent.press(button); 
    
    expect(navigation.navigate).toHaveBeenCalledWith('Login'); 
  });
});

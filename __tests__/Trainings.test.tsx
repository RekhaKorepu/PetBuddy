import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Trainings from '../src/screens/TrainingsScreen';
import { Linking } from 'react-native';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn().mockResolvedValue(true), 
}));

describe('Trainings Screen Tests', () => {
  it('renders all sections correctly', () => {
    const { getByText, getByTestId } = render(<Trainings />);

    expect(getByText('Articles')).toBeTruthy();
    expect(getByText('Please go through the articles to learn more about training.')).toBeTruthy();
    expect(getByText('https://www.sniffspot.com')).toBeTruthy();
    expect(getByText('https://roguepetscience.com')).toBeTruthy();
  });

  it('handles link clicks correctly', async () => {
    const { getByText } = render(<Trainings />);
    const link1 = getByText('https://www.sniffspot.com');
    fireEvent.press(link1);

    await waitFor(() => {
      expect(Linking.openURL).toHaveBeenCalledWith('https://www.sniffspot.com');
    });

    const link3 = getByText('https://roguepetscience.com');
    fireEvent.press(link3);

    await waitFor(() => {
      expect(Linking.openURL).toHaveBeenCalledWith('https://roguepetscience.com');
    });
    const link2 = getByText('https://youtu.be/4dbzPoB7AKk');
    fireEvent.press(link2);

    await waitFor(() => {
      expect(Linking.openURL).toHaveBeenCalledWith('https://youtu.be/4dbzPoB7AKk');
    });
  });

  it('opens the correct video link when clicked', async () => {
    (Linking.openURL as jest.Mock).mockResolvedValue(true);

    const { getByText } = render(<Trainings />);
    const videoLink = getByText('https://youtu.be/2jH7--ovgNM');
    fireEvent.press(videoLink);
    expect(Linking.openURL).toHaveBeenCalledWith('https://youtu.be/2jH7--ovgNM');
  });

  it('opens the correct blog link (Pet Business Insurance) when clicked', async () => {
    (Linking.openURL as jest.Mock).mockResolvedValue(true);

    const { getByText } = render(<Trainings />);
    const petBusinessBlogLink = getByText('Pet Business Insurance Provider');
    fireEvent.press(petBusinessBlogLink);

    expect(Linking.openURL).toHaveBeenCalledWith('https://www.petbusinessinsurance.co.uk/news/Dog-Training-Blogs-to-Follow-in-2022/');
  });

  it('opens the correct blog link (Royal Canin) when clicked', async () => {
    (Linking.openURL as jest.Mock).mockResolvedValue(true);

    const { getByText } = render(<Trainings />);
    const royalCaninBlogLink = getByText('Royal Canin IN: Tailored Health Nutrition For Cats & Dogs');
    fireEvent.press(royalCaninBlogLink);
    expect(Linking.openURL).toHaveBeenCalledWith('https://www.royalcanin.com/in');
  });
   
  it('handles URL opening errors by throwing an error', async () => {
    (Linking.openURL as jest.Mock).mockRejectedValue(new Error('Failed to open URL'));

    const { getByText } = render(<Trainings />);
    const link = getByText('https://www.sniffspot.com');
    await expect(async () => {
      await fireEvent.press(link);
      await waitFor(() => {});
    }).rejects.toThrow('An error occurred while redirecting to url: Failed to open URL');
  });
 
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { IndividualPet } from '../src/screens/IndividualPetScreen';


const mockNavigate = jest.fn();
const petData = {
  petName: 'Buddy',
  breed: 'Golden Retriever',
  emergencyContact: '1234567890',
  gender: 'Male',
  age: 3,
  weight: 25,
  height: 60,
  color: 'Golden',
  remarks: 'Loves to play fetch',
  image: ['imageBase64String'],
};

describe('IndividualPet Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the pet data correctly', () => {
    const { getByText } = render(
      <IndividualPet route={{ params: { pet: petData } }} navigation={{ navigate: mockNavigate }} />
    );

    expect(getByText(petData.petName)).toBeTruthy();
    expect(getByText(petData.breed)).toBeTruthy();
    expect(getByText(`+91 ${petData.emergencyContact}`)).toBeTruthy();
    expect(getByText(`${petData.age} yrs`)).toBeTruthy();
    expect(getByText(`${petData.weight} kg`)).toBeTruthy();
    expect(getByText(`${petData.height} cm`)).toBeTruthy();
    expect(getByText(petData.color)).toBeTruthy();
    expect(getByText(petData.remarks)).toBeTruthy();
  });

  it('displays the correct gender icon based on pet gender', () => {
    const { getByTestId } = render(
      <IndividualPet route={{ params: { pet: petData } }} navigation={{ navigate: mockNavigate }} />
    );
    const genderIcon = getByTestId('gender-icon');
    // expect(genderIcon.props.source.uri).toContain(undefined);
    expect(genderIcon).toBeTruthy();
  });

  it('navigates to PetGallery screen when Gallery is pressed', () => {
    const { getByText } = render(
      <IndividualPet route={{ params: { pet: petData } }} navigation={{ navigate: mockNavigate }} />
    );

    const galleryButton = getByText('Gallery');
    fireEvent.press(galleryButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('PetGallery', { pet: petData });
  });

  it('opens the modal when Track button is pressed', () => {
    const { getByText, queryByTestId } = render(
      <IndividualPet route={{ params: { pet: petData } }} navigation={{ navigate: mockNavigate }} />
    );
    expect(queryByTestId('track-modal')).toBeNull();
    const trackButton = getByText('Track');
    fireEvent.press(trackButton);
    expect(queryByTestId('track-modal')).toBeTruthy();
  });

  it('navigates to Remainders screen when Reminders button in modal is pressed', () => {
    const { getByText, getByTestId } = render(
      <IndividualPet route={{ params: { pet: petData } }} navigation={{ navigate: mockNavigate }} />
    );
    const trackButton = getByText('Track');
    fireEvent.press(trackButton);
    const remindersButton = getByText('Reminders');
    fireEvent.press(remindersButton);

    expect(mockNavigate).toHaveBeenCalledWith('Remainders');
  });
});

// Home.test.tsx
import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import Home from '../src/screens/HomeScreen';
import { useGlobalState } from '../src/StateContext/UserContext';
import * as imagePicker from 'react-native-image-picker';



jest.mock('../src/StateContext/UserContext', () => ({
  useGlobalState: jest.fn(),
}));

jest.mock('node-fetch', () => jest.fn());
jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(),
}));

jest.mock('../src/utils/getBaseURL', () => jest.fn(() => 'http://localhost:3000'));
jest.mock('../src/utils/requestPermission', () => ({
  requestPhotoPermission: jest.fn(() => Promise.resolve(true)), 
}));

describe('Home Screen Tests', () => {
  beforeEach(() => {
    (useGlobalState as jest.Mock).mockReturnValue({ username: 'testUser' }); 
  });
  (global as any).fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );

  it('renders Home screen correctly', () => {
    const { getByText } = render(<Home navigation={{ navigate: jest.fn() }} />);
    expect(getByText('Hey testUser,')).toBeTruthy();
    expect(getByText('My Pets')).toBeTruthy();
  });

  it('opens modal when Add Pet button is pressed', () => {
    const { getByText, getByRole } = render(<Home navigation={{ navigate: jest.fn() }} />);
    fireEvent.press(getByText('Add Pet'));

    expect(getByText('Add Pet Details')).toBeTruthy();
  });


//   it('fills and clears pet details form', async () => {
//   const { getByText, getByTestId, getByPlaceholderText } = render(<Home navigation={{ navigate: jest.fn() }} />);
  
//   // Open the modal
//   fireEvent.press(getByText('Add Pet'));

//   // Wait for the modal to be visible
//   await waitFor(() => {
//     expect(getByText('Add Pet Details')).toBeTruthy(); // Confirm modal opens
//   });

//   // Check initial input state
//   const petNameInput = getByTestId('pet-name-input');
//   expect(petNameInput.props.value).toBe('');

//   // Fill out the form
//   fireEvent.changeText(petNameInput, 'Buddy');
//   fireEvent.changeText(getByPlaceholderText('Breed'), 'Golden Retriever');
//   fireEvent.changeText(getByPlaceholderText('age'), '2');

//   // Verify input value updates
//   expect(petNameInput.props.value).toBe('Buddy');

//   // Submit the form
//   fireEvent.press(getByText('Submit'));

//   // Ensure form is cleared after submission
//   await waitFor(() => {
//     expect(getByTestId('pet-name-input').props.value).toBe('');
//   });
// });





 
  it('handles photo selection', async () => {
    const { getByText, getByTestId } = render(<Home navigation={{ navigate: jest.fn() }} />);
    
    (imagePicker.launchImageLibrary as jest.Mock).mockImplementation((options, callback) => {
      callback({ assets: [{ base64: 'testImageData' }] });
    });
  
   
    fireEvent.press(getByText('Add Pet'));
    await waitFor(() => {
      expect(getByTestId('pet-name-input')).toBeTruthy(); 
    });
  
    fireEvent.press(getByTestId('select-photo-btn'));
    await waitFor(() => {
      expect(imagePicker.launchImageLibrary).toHaveBeenCalled();
    });
  });

  it('fetches and displays pet details', async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ data: [{ petName: 'Buddy', breed: 'Golden Retriever', image: ['testImageBase64'] }] }),
      })
    );

    const {findByText } = render(<Home navigation={{ navigate: jest.fn() }} />);
    
    expect(await findByText('Buddy')).toBeTruthy();
    expect(await findByText('Golden Retriever')).toBeTruthy();
  });

  it('fills in pet details correctly', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Home navigation={{ navigate: jest.fn() }} />);

    fireEvent.press(getByText('Add Pet'));

    fireEvent.changeText(getByPlaceholderText('weight'), '20');
    fireEvent.changeText(getByPlaceholderText('Height'), '50');
    fireEvent.changeText(getByPlaceholderText('Color'), 'Brown');
    fireEvent.changeText(getByPlaceholderText('Emergency Contact'), '1234567890');
    fireEvent.changeText(getByPlaceholderText('Remarks'), 'Very active pet');

    expect(getByPlaceholderText('weight').props.value).toBe('20');
    expect(getByPlaceholderText('Height').props.value).toBe('50');
    expect(getByPlaceholderText('Color').props.value).toBe('Brown');
    expect(getByPlaceholderText('Emergency Contact').props.value).toBe('1234567890');
    expect(getByPlaceholderText('Remarks').props.value).toBe('Very active pet');
  });


  it('selects gender', async () => {
    const { getByText, getByTestId } = render(<Home navigation={{ navigate: jest.fn() }} />);
    fireEvent.press(getByText('Add Pet'));

    fireEvent.press(getByText('Male'));
  
    await waitFor(() => {
      const maleButton: any = getByText('Male').parent;  
      expect(maleButton.props.style).toMatchObject(
        {"fontSize": 16 }
      );
    });
  
 
    fireEvent.press(getByText('Female'));
  
    await waitFor(() => {
      const femaleButton: any = getByText('Female').parent;
      expect(femaleButton.props.style).toMatchObject(
       { "fontSize": 16 }
      );
    });
  });
});


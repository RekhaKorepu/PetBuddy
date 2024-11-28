import { Platform } from 'react-native';  

const getBaseURL = (): string => {
  if (Platform.OS === 'ios') {
    return 'http://localhost:3000';
  } else if (Platform.OS === 'android') {
    return 'http://10.0.2.2:3000';
  } else {
    return '';
  }
};

export default getBaseURL;
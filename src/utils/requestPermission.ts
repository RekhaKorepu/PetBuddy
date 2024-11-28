import { PermissionsAndroid, Platform, Alert } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const requestPhotoPermission = async () => {
  if (Platform.OS === 'ios') {
    const currentStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    
    if (currentStatus === RESULTS.GRANTED) {
      return true; 
    }

    const newStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (newStatus === RESULTS.DENIED) {
      Alert.alert(
        'Permission Needed',
        'Photo library access is required. Please grant permission to proceed.'
      );
      await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    }

    return newStatus === RESULTS.GRANTED;
  }

  if (Platform.OS === 'android') {
    try {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );

      if (hasPermission) {
        return true;  
      }

      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Photo Access Required',
          message: 'This app needs access to your photos.',
          buttonPositive: 'OK',
        }
      );

      if (result === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert(
          'Permission Needed',
          'Photo access is required. Please grant permission to proceed.'
        );
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
      }

      return result === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
      console.error('Permission error:', error);
      Alert.alert('Error', 'Failed to request permission. Please try again.');
      return false;
    }
  }
};

export { requestPhotoPermission };

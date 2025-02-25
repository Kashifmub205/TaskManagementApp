import { Platform } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import * as Keychain from 'react-native-keychain';

const AUTH_TOKEN_KEY = 'authToken';

export const storeToken = async (token: string) => {
  try {
    if (Platform.OS === 'ios') {
      await Keychain.setGenericPassword(AUTH_TOKEN_KEY, token);
    } else {
      await EncryptedStorage.setItem(AUTH_TOKEN_KEY, token);
    }
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

export const getToken = async () => {
  try {
    if (Platform.OS === 'ios') {
      const credentials = await Keychain.getGenericPassword();
      return credentials ? credentials.password : null;
    } else {
      return await EncryptedStorage.getItem(AUTH_TOKEN_KEY);
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    if (Platform.OS === 'ios') {
      await Keychain.resetGenericPassword();
    } else {
      await EncryptedStorage.removeItem(AUTH_TOKEN_KEY);
    }
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

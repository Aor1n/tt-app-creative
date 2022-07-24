import AsyncStorage from '@react-native-community/async-storage';

import {asyncStorageKeys} from 'src/constants/asyncStogageKeys';

export interface AuthTokensData {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

class AsyncStorageService {
  setAuthData = async (data: AuthTokensData) => {
    try {
      await AsyncStorage.setItem(
        asyncStorageKeys.authData,
        JSON.stringify(data),
      );
    } catch (e) {
      throw new Error('AsyncStorageService.setAuthData');
    }
  };

  getAuthData = async (): Promise<AuthTokensData | null> => {
    try {
      const authData = await AsyncStorage.getItem(asyncStorageKeys.authData);

      if (authData === null) return null;

      return JSON.parse(authData);
    } catch (e) {
      throw new Error('AsyncStorageService.getAuthData');
    }
  };
}

export default new AsyncStorageService();

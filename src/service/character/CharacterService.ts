import { BaseCharacter } from './BaseCharacter';
import { AxiosRequestConfig } from 'axios';

export class CharacterService extends BaseCharacter {
  constructor() {
    super(
      process.env.VUE_APP_API_URL_DEV,
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        config.headers = {
          'Authorization': process.env.VUE_APP_API_URL_DEV,
          'Content-Type': 'application/json',
        };

        return config;
      }
    );
  }
}

export default new CharacterService();
import { ReactSession } from 'react-client-session';
import apiClient from 'helpers/apiClient';

class UserService {
  static #USER_API = 'user';

  static async login(username, password) {
    const req = await apiClient().get(`${this.#USER_API}/login?username=${username}&password=${password}`);
    ReactSession.setStoreType('localStorage');
    ReactSession.set('favnote_access_token', req.data);
  }

  static async signup(username, password) {
    await apiClient().post(`${this.#USER_API}/signup?username=${username}&password=${password}`);
  }

  static getAccessToken() {
    ReactSession.setStoreType('localStorage');
    return ReactSession.get('favnote_access_token');
  }

  static async checkCredentials() {
    const token = this.getAccessToken();
    const req = await apiClient().get(`${this.#USER_API}/check?token=${token}`);
    return req.data;
  }
}

export default UserService;

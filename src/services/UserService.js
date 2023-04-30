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
    await apiClient().get(`${this.#USER_API}/signup?username=${username}&password=${password}`);
  }
}

export default UserService;

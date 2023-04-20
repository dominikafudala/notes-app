import apiClient from 'helpers/apiClient';

class CardService {
  static #CARD_API = 'card';

  static async getCardsOfType(type) {
    const req = await apiClient().get(`${this.#CARD_API}/all?type=${type}`);
    return req.data;
  }

  static async getCardById(id) {
    try {
      const req = await apiClient().get(`${this.#CARD_API}/${id}`);
      return req.data;
    } catch (err) {
      return -1;
    }
  }

  static async deleteCardFromId(id) {
    const req = await apiClient().delete(`${this.#CARD_API}/${id}`);
    return req.data;
  }
}

export default CardService;

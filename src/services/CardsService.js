import properties from 'properties';
import axios from 'axios';

class CardService {
  static async getCardsOfType(type) {
    try {
      const req = await axios.get(`${properties.backend_location}card/all?type=${type}`);
      return req.data;
    } catch (err) {
      return -1;
    }
  }

  static async getCardById(id) {
    try {
      const req = await axios.get(`${properties.backend_location}card/${id}`);
      return req.data;
    } catch (err) {
      return -1;
    }
  }
}

export default CardService;

// UserModel.js
import axios from './axios';

const UserModel = {
  connect: async (name) => {
    try {
      const response = await axios.get('/connect', {
        params: {
          name: name,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  register: async (name) => {
    try {
      const response = await axios.get('/register', {
        params: {
          name: name,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getBananas: async (name, num) => {
    try {
      const response = await axios.get('/get_bananas', {
        params: {
          name: name,
          num: num,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  sendBananas: async (name1, name2, num) => {
    try {
      const response = await axios.get('/send_bananas', {
        params: {
          name1: name1,
          name2: name2,
          num: num,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserModel;

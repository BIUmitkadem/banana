import axios from 'axios';

axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';

const instance = axios.create({
  baseURL: 'https://2st8th-8080.csb.app', 
  withCredentials: false,

});

export default instance;

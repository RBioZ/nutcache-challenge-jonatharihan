import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crudcrud.com/api/5e1007ced0f249058965513948761b16',
});

export default api;

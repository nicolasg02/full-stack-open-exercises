import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = contactObject => {
  const request = axios.post(baseUrl, contactObject);
  return request.then(response => response.data);
};

const remove = contactId => {
  return axios.delete(`${baseUrl}/${contactId}`);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};

export default {
  create,
  getAll,
  remove,
  update,
};

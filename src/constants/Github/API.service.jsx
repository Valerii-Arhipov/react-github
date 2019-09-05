import axios from 'axios';

const request = (url => axios.get(url)
  .then(resolve => resolve.data));

export default request;

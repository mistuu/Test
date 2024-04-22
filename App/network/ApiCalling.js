import axios from 'axios';
import BASE_URL from '../common/Config';
export const axiosGet = async url => {
  try {
    let {data: response} = await axios.get(BASE_URL);
    if (response.data) return response.data;
    else return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  axiosGet
};

import axios from 'axios';
import * as c from '../constants';

export async function changePassword(data){
  try{
    let res = await axios.put(c.CHANGE_PASSWORD, data);
    return res.data;
  }catch (e) {
    console.log(e);
    throw handler(e);
  }
}

export async function updateProfile(data){
  try{
    let res = await axios.put(c.UPDATE_PROFILE, data);
    return res.data;
  }catch (e) {
    console.log(e);
    throw handler(e);
  }
}

export function handler(err) {
  let error = err;
  if (err.response && err.response.data.hasOwnProperty("message"))
   error = err.response.data;
  else if (!err.hasOwnProperty("message")) error = err.toJSON();

  return error;
}



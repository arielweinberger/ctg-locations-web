import axios from 'axios';

export const signUp = (username, password) => {
  return async (dispatch) => {
    await axios.post('https://boiling-sierra-59212.herokuapp.com/auth/signup', {
      username,
      password, 
    });

    dispatch({
      type: 'USER_SIGNUP',
    });
  };
};

export const signIn = (username, password) => {
  return async (dispatch) => {
    await axios.post('https://boiling-sierra-59212.herokuapp.com/auth/signin', {
      username,
      password, 
    }, {
      withCredentials: true,
    });

    dispatch({
      type: 'USER_SIGNIN',
      user: username,
    });
  };
};
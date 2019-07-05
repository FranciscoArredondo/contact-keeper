import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = props => {
  const initalState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initalState);

  // Actions

  // Load User
  const loadUser = async () => {
    console.log('loading user...');
    if (localStorage.token) {
      console.log('localstorage token found!', localStorage.token);
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      console.log('user authentication success!', res.data);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      console.log('user authentication error', err);
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Context-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/users', formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Context-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth', formData, config);
      console.log('trying to authorize user....', res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  // Logout

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        register,
        clearErrors,
        loadUser,
        login,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

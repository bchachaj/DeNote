import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {type: RECEIVE_CURRENT_USER, currentUser};
};

export const clearErrors = (errors) => {
  return {
    type: CLEAR_ERRORS,
    errors
  };
};

//NB demo login = dispatch predefined user object to server(and make in database)



export const login = user => dispatch => (
  APIUtil.login(user).then(user =>         dispatch(receiveCurrentUser(user)),
  err => {
    dispatch(receiveErrors(err.responseJSON));
  }
)
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user =>
    dispatch(receiveCurrentUser(user))
  , err => {
    dispatch(receiveErrors(err.responseJSON));
  }
)

);

export const logout = () => dispatch => {
  return APIUtil.logout().then(dispatch(receiveCurrentUser(null)), err => dispatch(receiveErrors(err)));
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
   };
};

export default (state = {
  logging: false,
  login_error: "",
  login_success: false,
  token: "",
}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, token: action.payload.token };
    case "LOGGING_IN":
      return { ...state, logging: action.payload.logging };
    case "LOGIN_FAILURE":
      return { ...state, login_error: action.payload.error };
    default:
      return state;
  }
};

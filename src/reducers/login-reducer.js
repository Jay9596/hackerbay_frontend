export default (
  state = {
    logging: false,
    login_error: false,
    error_message: "",
    login_success: false,
    token: ""
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        logging: action.payload.logging,
        login_success: action.payload.success
      };
    case "LOGGING_IN":
      return { ...state, logging: action.logging };
    case "LOGIN_FAILURE":
      return {
        ...state,
        login_error: action.payload.error,
        error_message: action.payload.message,
        logging: action.payload.logging,
        login_success: action.payload.success
      };
    default:
      return state;
  }
};

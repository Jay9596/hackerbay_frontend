export default (
  state = {
    signing: false,
    signup_error: false,
    error_message: "",
    signup_success: false,
    token: ""
  },
  action
) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        signing: action.payload.signing,
        signup_success: action.payload.signup_success
      };
    case "SIGNING_UP":
      return { ...state, signing: action.siging };
    case "SIGNUP_FAILURE":
      return {
        ...state,
        signup_error: action.payload.signup_error,
        error_message: action.payload.message,
        signing: action.payload.signing,
        signup_success: action.payload.signup_success
      };
    default:
      return state;
  }
};

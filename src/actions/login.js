var request = require("request");

const BASE_URL = "http://127.0.0.1:8000";

export function submitLogin(loginData) {
  return dispatch => {
    request(
      {
        method: "POST",
        url: BASE_URL + "/users/login",
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json"
        },
        body: { email: loginData.email, password: loginData.password },
        json: true
      },
      function(error, response, body) {
        if (error) {
          console.error(error);
          dispatch(loginError(error));
        }
        console.log(body);
        if (body.error !== undefined) {
          dispatch(loginError(body.error));
        } else {
          dispatch(loginSuccess(body.token));
        }
      }
    );
    dispatch(isLoggingIn(true));
  };
}

const isLoggingIn = loginState => {
  return {
    type: "LOGGING_IN",
    logging: loginState
  };
};

const loginSuccess = tokenVal => {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
      token: tokenVal,
      logging: false,
      success: true
    }
  };
};

const loginError = errorVal => {
  return {
    type: "LOGIN_FAILURE",
    payload: {
      error: true,
      message: errorVal,
      logging: false,
      success: false
    }
  };
};

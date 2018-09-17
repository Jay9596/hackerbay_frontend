var request = require("request");

const BASE_URL = "http://127.0.0.1:8000";

export function submitSignup(signupData) {
  // console.log(signupData);
  return dispatch => {
    request(
      {
        method: "POST",
        url: BASE_URL + "/users/signup",
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json"
        },
        body: { email: signupData.email, password: signupData.password },
        json: true
      },
      function(error, response, body) {
        if (error) {
          // console.error(error);
          dispatch(signupError(error));
        }
        // console.log(body);
        if (body.error !== undefined || body.success === false) {
          dispatch(signupError(body.error));
        } else {
          dispatch(signupSuccess(body.token));
        }
      }
    );
    dispatch(isSigningUp(true));
  };
}

const isSigningUp = signupState => {
  return {
    type: "SIGNING_UP",
    signing: signupState
  };
};

const signupSuccess = tokenVal => {
  return {
    type: "SIGNUP_SUCCESS",
    payload: {
      token: tokenVal,
      signing: false,
      signup_success: true
    }
  };
};

const signupError = errorVal => {
  return {
    type: "SIGNUP_FAILURE",
    payload: {
      signup_error: true,
      message: errorVal,
      signing: false,
      signup_success: false
    }
  };
};

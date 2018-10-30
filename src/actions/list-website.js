var request = require("request");

const BASE_URL = "http://127.0.0.1:8000";

export function fetchList(token) {
  return dispatch => {
    request(
      {
        method: "GET",
        url: BASE_URL + "/website/list",
        headers: {
          "cache-control": "no-cache",
          "Content-Type": "application/json",
          authorization: "Bearer " + token
        },
        json: true
      },
      function(error, response, body) {
        if (error) {
          console.log(error);
          dispatch(listError(error));
        }
        console.warn(body)
        if (body.error !== undefined) {
          dispatch(listError(body.error));
        } else {
          dispatch(listSuccess(body));
        }
      }
    );
    dispatch(listRequest(true));
  };
}

const listRequest = requestState => {
  return {
    type: "L_REQUESTING",
    payload: {
      request: requestState
    }
  };
};

const listSuccess = value => {
  return {
    type: "LIST_SUCCESS",
    payload: {
      success: true,
      failure: false,
      request: false,
      list: value
    }
  };
};

const listError = errorVal => {
  return {
    type: "LIST_FAILURE",
    payload: {
      error: errorVal,
      failure: true,
      success: false,
      request: false
    }
  };
};

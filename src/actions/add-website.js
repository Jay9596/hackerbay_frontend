var request = require("request");

const BASE_URL = "http://127.0.0.1:8000";

export function submitWebsite(websiteData, token) {
  return dispatch => {
    request(
      {
        method: "POST",
        url: BASE_URL + "/website/add",
        headers: {
          "cache-control": "no-cache",
          "Content-Type": "application/json",
          authorization: "Bearer " + token
        },
        body: { name: websiteData.name, url: websiteData.url },
        json: true
      },
      function(error, response, body) {
        if (error) {
          console.log(error);
          dispatch(addError(error));
        }
        if (body.error !== undefined) {
          dispatch(addError(body.error));
        } else {
          dispatch(addSuccess(body));
        }
      }
    );
    dispatch(addRequesting(true));
  };
}

const addRequesting = requestState => {
  return {
    type: "REQUESTING",
    payload: {
      request: requestState,
      error: "",
      failure: false,
      success: false, 
    }
  };
};

const addSuccess = value => {
  return {
    type: "ADD_SUCCESS",
    payload: {
      success: true,
      failure: false,
      request: false
    }
  };
};

const addError = errorVal => {
  return {
    type: "ADD_FAILURE",
    payload: {
      error: errorVal,
      failure: true,
      request: false,
      success: false
    }
  };
};

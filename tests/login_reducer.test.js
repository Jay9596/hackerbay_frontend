import reducer from "../src/reducers/login-reducer";

describe("Login reducer", () => {
  const initialState = {
    logging: false,
    login_error: false,
    error_message: "",
    login_success: false,
    token: ""
  };
  // Initial State
  it("should have the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  //Login Success
  it("Should give success state", () => {
    let action = {
      type: "LOGIN_SUCCESS",
      payload: {
        success: true,
        logging: false,
        token: "TOKEN STRING"
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      login_success: true,
      logging: false,
      token: "TOKEN STRING"
    });
  });
  // Login Error
  it("Should give error state and have error message", () => {
    let action = {
      type: "LOGIN_FAILURE",
      payload: {
        success: false,
        error: true,
        logging: false,
        message: "SAMPLE ERROR"
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      login_success: false,
      login_error: true,
      logging: false,
      error_message: "SAMPLE ERROR"
    });
  });
  //Logging In
  it("Should show logging state", () => {
    let action = {
      type: "LOGGING_IN",
      logging: true
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      logging: true
    });
  });
});

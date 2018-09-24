import reducer from "../src/reducers/signup-reducer";

describe("Sign-up Reducer", () => {
  const initialState = {
    signing: false,
    signup_error: false,
    error_message: "",
    signup_success: false,
    token: ""
  };

  it("should have the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  // Sign-up Success
  it("Should give success state", () => {
    let action = {
      type: "SIGNUP_SUCCESS",
      payload: {
        signup_success: true,
        token: "SIGNUP TOKEN STRING",
        signing: false
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      token: "SIGNUP TOKEN STRING",
      signing: false,
      signup_success: true
    });
  });

  // Sign-up Error
  it("Should give error state and have error message", () => {
    let action = {
      type: "SIGNUP_FAILURE",
      payload: {
        signup_success: false,
        signing: false,
        signup_error: true,
        message: "SAMPLE ERROR"
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      signup_error: true,
      error_message: "SAMPLE ERROR",
      signing: false,
      signup_success: false
    });
  });

  // Signing-up
  it("Should show signing-up state", () => {
    let action = {
      type: "SIGNING_UP",
      signing: true
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      signing: true,
    });
  });
});

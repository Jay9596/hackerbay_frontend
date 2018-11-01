import reducer from "../src/reducers/add-website-reducer";

describe("Add Website Reducer", () => {
  const initialState = {
    addRequest: false,
    addSuccess: false,
    addFailure: false,
    addReset: false,
    addError: ""
  };

  it("should have initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  // Add Website Success
  it("should give success state", () => {
    let action = {
      type: "ADD_SUCCESS",
      payload: {
        success: true,
        failure: false,
        request: false
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      addSuccess: true,
      addFailure: false,
      addRequest: false,
      addReset: true
    });
  });
  // Add website Requesting state
  it("should give success state", () => {
    let action = {
      type: "REQUESTING",
      payload: {
        request: true,
        success: false,
        failure: false,
        error: ""
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      addRequest: true,
      addSuccess: false,
      addFailure: false,
      addError: ""
    });
  });

  // Add Website Failure/Error
  it("should give success state", () => {
    let action = {
      type: "ADD_FAILURE",
      payload: {
        error: "Error Value",
        failure: true,
        request: false,
        success: false
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      addFailure: true,
      addRequest: false,
      addSuccess: false,
      addError: "Error Value"
    });
  });
});

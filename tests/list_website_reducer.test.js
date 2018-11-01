import reducer from "../src/reducers/list-website-reducer";

describe("List Website Reducer", () => {
  const initialState = {
    listRequest: false,
    listSuccess: false,
    listFailure: false,
    listReset: false,
    listError: "",
    list: []
  };

  it("should have initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  // List fetch Success
  it("should give success state", () => {
    let action = {
      type: "LIST_SUCCESS",
      payload: {
        success: true,
        failure: false,
        request: false,
        list: [{ name: "name", url: "url", status: "status" }]
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      listSuccess: true,
      listFailure: false,
      listRequest: false,
      list: [{ name: "name", url: "url", status: "status" }]
    });
  });

  // List Requesting state
  it("should give requesting state", () => {
    let action = {
      type: "L_REQUESTING",
      payload: {
        request: true
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      listRequest: true
    });
  });

  // List fetch Failure/Error
  it("should give requesting state", () => {
    let action = {
      type: "LIST_FAILURE",
      payload: {
        error: "Error Value",
        failure: true,
        success: false,
        request: false
      }
    };
    expect(reducer(undefined, action)).toEqual({
      ...initialState,
      listRequest: false,
      listSuccess: false,
      listFailure: true,
      listError: "Error Value"
    });
  });
});

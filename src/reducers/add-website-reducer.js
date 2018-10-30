export default (
  state = {
    addRequest: false,
    addSuccess: false,
    addFailure: false,
    addReset: false,
    addError: ""
  },
  action
) => {
  switch (action.type) {
    case "ADD_SUCCESS":
      return {
        ...state,
        addSuccess: action.payload.success,
        addFailure: action.payload.failure,
        addRequest: action.payload.request,
        addReset: true
      };
    case "REQUESTING":
      return {
        ...state,
        addRequest: action.payload.request,
        addFailure: action.payload.failure,
        addError: action.payload.error,
        addSuccess: action.payload.success,
      };
    case "ADD_FAILURE":
      return {
        ...state,
        addError: action.payload.error,
        addFailure: action.payload.failure,
        addSuccess: action.payload.success,
        addRequest: action.payload.request
      };
    default:
      return state;
  }
};

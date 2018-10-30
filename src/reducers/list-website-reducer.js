export default (
  state = {
    listRequest: false,
    listSuccess: false,
    listFailure: false,
    listReset: false,
    listError: "",
    list: [],
  },
  action
) => {
  switch (action.type) {
    case "LIST_SUCCESS":
      return {
        ...state,
        listSuccess: action.payload.success,
        listFailure: action.payload.failure,
        listRequest: action.payload.request,
        list: action.payload.list,
      };
    case "L_REQUESTING":
      return {
        ...state,
        listRequest: action.payload.request
      };
    case "LIST_FAILURE":
      return {
        ...state,
        listError: action.payload.error,
        listFailure: action.payload.error,
        listSuccess: action.payload.success,
        listRequest: action.payload.request
      };
    default:
      return state;
  }
};

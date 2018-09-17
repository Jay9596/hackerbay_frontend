import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginReducer from "./login-reducer";
import signupReducer from "./signup-reducer";

// calling the default reducer to create a link
import defaultReducer from "./default-reducer";

const rootReducers = combineReducers({
  form: formReducer,
  // add reducer files references here
  login: loginReducer,
  signup: signupReducer,
  default: defaultReducer
});

export default rootReducers;

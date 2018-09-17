import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxPromise from "redux-promise";

import reducer from "./reducers";

const logger = createLogger();
const middleware = applyMiddleware( reduxPromise, thunk);

let store = createStore(
  reducer,
  compose(
    middleware,
    // Redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

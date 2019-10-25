import { createStore, compose, applyMiddleware } from "redux";

import reducers from "./reducers";

// const composeEnhancers = compose;
const middleware = [];

let composeEnhancers = compose;
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

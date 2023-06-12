import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

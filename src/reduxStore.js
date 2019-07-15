import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const initialState = {};

export const middleware = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware);

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(createStoreWithMiddleware)
);

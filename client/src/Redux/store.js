import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { filterReducer } from "./filterReducer/filterReducer";
import { watchReducer } from "./watchReducer/watchReducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  watch:watchReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

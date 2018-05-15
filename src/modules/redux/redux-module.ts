import { createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { houseReducer } from "../house/house-reducer";
import { IApplicationState } from "./redux-types";

export const reducers: Reducer<IApplicationState> = combineReducers({
  house: houseReducer
});

const configureStore = () => createStore(reducers, composeWithDevTools());

export const store = configureStore();

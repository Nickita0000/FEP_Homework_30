import contactReducer from "./reducer";
import { createStore } from 'redux';

export const store = createStore(contactReducer)
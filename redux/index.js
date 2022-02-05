import { combineReducers, createStore } from "redux";
import { todosReducers } from "./reducers/todos";

const rootReducers = combineReducers({
  todos: todosReducers,
});

export const store = createStore(rootReducers);

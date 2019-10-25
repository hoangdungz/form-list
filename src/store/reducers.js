import { combineReducers } from "redux";
import todoReducer from '../components/todo/reducer';
const reducers = combineReducers({
    todo: todoReducer,
});

export default reducers;
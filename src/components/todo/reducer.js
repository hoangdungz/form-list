import { ADD_TODO, EDIT_TODO, DELETE_TODO, CANCEL_TODO } from "./action";

const initValue = {
  list: []
};

function todoApp(state = initValue, action) {
  switch (action.type) {
    case ADD_TODO:
      let newList = state.list;
      newList = [...newList, action.payload];
      return {
        ...state,
        list: newList
      };
    case EDIT_TODO:
      return [];
    case DELETE_TODO:
      return [];
    case CANCEL_TODO:
      return [];

    default:
      return state;
  }
}
export default todoApp;

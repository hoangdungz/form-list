export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CANCEL_TODO = "CANCEL_TODO";

export function addToDo(payload) {
  return { type: ADD_TODO, payload: payload };
}
export function editToDo(payload) {
  return { type: EDIT_TODO, payload: payload };
}
export function deleteToDo(payload) {
  return { type: DELETE_TODO, payload };
}
export function cancelToDo(payload) {
  return { type: CANCEL_TODO, payload };
}

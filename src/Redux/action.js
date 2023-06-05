// Action types
export const SET_DRAGGED_BUTTON_ID = "SET_DRAGGED_BUTTON_ID";

export const setDraggedButtonId = (buttonId) => ({
  type: SET_DRAGGED_BUTTON_ID,
  payload: buttonId,
});

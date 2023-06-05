import { combineReducers } from "redux";
import { SET_DRAGGED_BUTTON_ID, REMOVE_BUTTON } from "./action";

// Reducer for draggedButtonId
const draggedButtonIdReducer = (state = null, action) => {
  switch (action.type) {
    case SET_DRAGGED_BUTTON_ID:
      return action.payload;
    case REMOVE_BUTTON:
      if (state === action.payload) {
        return null;
      }
      return state;
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  draggedButtonId: draggedButtonIdReducer,
});

export default rootReducer;

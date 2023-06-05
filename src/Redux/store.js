// // Redux store configuration

// import { legacy_createStore as createStore } from "redux";

// // Define action types
// const SET_DRAGGED_BUTTON_ID = "SET_DRAGGED_BUTTON_ID";

// // Define initial state
// const initialState = {
//   draggedButtonId: null,
// };

// // Define reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_DRAGGED_BUTTON_ID:
//       return {
//         ...state,
//         draggedButtonId: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(reducer);

// export default store;

import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;

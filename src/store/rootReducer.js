import { combineReducers } from "redux";

import auth from "./slices/authSlice";
import theme from "./slices/themeSlice";

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;

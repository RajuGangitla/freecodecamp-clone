import { SETUP_USER, FETCH_COURSES,LOGOUT_USER } from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === SETUP_USER) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
    };
  }
  if (action.type === FETCH_COURSES) {
    return {
      ...state,
      courses: action.payload.courses,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
};
export default reducer;

import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import { message } from "antd";
import { SETUP_USER, FETCH_COURSES, LOGOUT_USER } from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  token: token,
  user: user ? JSON.parse(user) : null,
  courses: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const setupUser = async ({ values, endPoint }) => {
    try {
      const res = await axios.post(`/api/v1/auth/${endPoint}`, values);
      const { user, token } = res.data;
      console.log(res.data)
      if (endPoint === "login") {
        dispatch({
          type: SETUP_USER,
          payload: { user, token },
        });
      }
      if (res.data.success) {
        if (endPoint === "login") {
          addUserToLocalStorage({ user, token });
        }
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  const getAllCourses = async () => {
    try {
      const res = await axios.get("/api/v1/courses/getAllCourses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { courses } = res.data;
      dispatch({
        type: FETCH_COURSES,
        payload: { courses },
      });
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  return (
    <AppContext.Provider
      value={{ ...state, setupUser, getAllCourses, logoutUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider, initialState };

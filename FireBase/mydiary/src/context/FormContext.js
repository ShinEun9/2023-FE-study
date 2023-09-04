import { createContext, useReducer } from "react";

const FormContext = createContext(); // context 객체를 생성

const FormContextProvider = ({ children }) => {
  const formReducer = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, title: action.payload };
      case "text":
        return { ...state, text: action.payload };
      case "deleteAll":
        return { title: "", text: "" };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(formReducer, {
    title: "",
    text: "",
  });

  return (
    <FormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };

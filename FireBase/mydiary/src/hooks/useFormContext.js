import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export const useFormContext = () => {
  //useContext를 통해 전역 context에 접근
  const context = useContext(FormContext);

  return context;
};

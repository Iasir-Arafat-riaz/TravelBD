import { useContext } from "react";
import { ContextAPI } from "../ContextApiProvider/ContextApiProvider";

const useAuth = () => {
  return useContext(ContextAPI);
};

export default useAuth;

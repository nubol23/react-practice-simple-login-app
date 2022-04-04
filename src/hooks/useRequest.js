import {useEffect} from "react";
import api from "../api/api";
import {authTypes} from "../types/types";


const useRequest = (httpRequest, resolveFunc, rejectFunc, userDispatch, deps=[]) => {
  useEffect(() => {
    httpRequest
      .then((response) => {resolveFunc(response);})
      .catch((error) => {
        rejectFunc(error);

        // If returned 401
        if (error.response && error.response.status === 401)
          userDispatch({ type: authTypes.logout });

      })
  }, deps)
};

export default useRequest;
import { createContext, useContext, useState } from "react";
import {
  ICalculatedData,
  IHandleRequestParams,
  IRequestAPIContext,
  IRequestAPIProvider,
} from "./types";
import { api } from "../../api";

const RequestAPIContext = createContext<IRequestAPIContext>(
  {} as IRequestAPIContext
);

export const useRequestAPI = () => {
  const context = useContext(RequestAPIContext);

  return context;
};

export const RequestAPIProvider = ({ children }: IRequestAPIProvider) => {
  const [calculatedData, setCalculatedData] = useState<ICalculatedData>({
    1: 1,
    15: 1,
    30: 1,
    90: 1,
  });

  const handleRequest = async ({
    endpoint,
    data,
  }: IHandleRequestParams): Promise<void> => {
    await api
      .post(endpoint, data)
      .then((res) => {
        setCalculatedData(res.data);
      })
      .catch((error) => {
        setCalculatedData({ message: error.message });
      });
  };

  return (
    <RequestAPIContext.Provider
      value={{ calculatedData, handleRequest, setCalculatedData }}
    >
      {children}
    </RequestAPIContext.Provider>
  );
};

import { AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";
import {
  ICalculatedData,
  IHandleRequestParams,
  IRequestAPIContext,
  IRequestAPIProvider,
} from "./types";

const RequestAPIContext = createContext<IRequestAPIContext>(
  {} as IRequestAPIContext
);

export const useRequestAPI = () => {
  const context = useContext(RequestAPIContext);

  return context;
};

export const RequestAPIProvider = ({ children }: IRequestAPIProvider) => {
  const [calculatedData, setCalculatedData] = useState<ICalculatedData>(
    {} as ICalculatedData
  );

  const handleRequest = async ({
    api,
    data,
  }: IHandleRequestParams): Promise<void> => {
    const response: AxiosResponse<ICalculatedData> = await api.post("/", data);

    setCalculatedData(response.data);
  };

  return (
    <RequestAPIContext.Provider value={{}}>
      {children}
    </RequestAPIContext.Provider>
  );
};

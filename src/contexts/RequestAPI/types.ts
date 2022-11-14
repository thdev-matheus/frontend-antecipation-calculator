import { ReactNode } from "react";
import { AxiosInstance } from "axios";

export interface IRequestAPIContext {
  calculatedData: ICalculatedData;
  handleRequest: ({ api, data }: IHandleRequestParams) => Promise<void>;
}

export interface IRequestAPIProvider {
  children: ReactNode;
}

export interface IHandleRequestParams {
  api: AxiosInstance;
  data: IRequestData;
}

export interface IRequestData {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

export interface ICalculatedData {
  "1"?: number;
  "15"?: number;
  "30"?: number;
  "90"?: number;
  "180"?: number;
  "360"?: number;
  "720"?: number;
  message?: string;
}

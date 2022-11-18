import { Dispatch, ReactNode, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

export interface IRequestAPIContext {
  calculatedData: ICalculatedData;
  handleRequest: ({ endpoint, data }: IHandleRequestParams) => Promise<void>;
  setCalculatedData: Dispatch<SetStateAction<ICalculatedData>>;
}

export interface IRequestAPIProvider {
  children: ReactNode;
}

export interface IHandleRequestParams {
  endpoint: string;
  data: FieldValues;
}

export interface ICalculatedData {
  1?: number;
  15?: number;
  30?: number;
  90?: number;
  180?: number;
  message?: string;
}

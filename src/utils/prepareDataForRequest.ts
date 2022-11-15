import { FieldValues } from "react-hook-form";
import { convertRealToCents } from "./convert";

export const prepareDataForRequest = (data: FieldValues, days: string[]) => {
  data.amount = convertRealToCents(data.amount);
  return days.length > 0 ? { ...data, days } : data;
};

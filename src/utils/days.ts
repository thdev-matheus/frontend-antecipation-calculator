import { IFormChecks } from "../components/Form/types";

export const convertChecksInDays = (data: IFormChecks): string[] => {
  const obj = Object({ ...data });
  const days = [];
  for (const key in obj) {
    obj[key] && days.push(key);
  }

  return days;
};

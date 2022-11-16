export const convertCentsToReal = (cents: number) => {
  return cents > 1 ? cents / 100 : 0;
};

export const convertRealToCents = (real: number) => {
  return real * 100;
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

export const toLowerWithHyphen = (string) => {
  return string.toLowerCase().replace(/ /g, "-");
};

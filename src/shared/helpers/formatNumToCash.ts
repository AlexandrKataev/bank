export const formatNumToCash = (num: number) => {
  const convert = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 1,
    minimumFractionDigits: 2,
  });

  return convert.format(num);
};

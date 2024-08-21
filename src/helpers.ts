export const generateBtnArr = (ratingRange: number) => {
  const array = [];
  for (let i = 1; i <= ratingRange; i++) {
    array.push(i.toString());
  }
  return array;
};

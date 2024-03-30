export const checkValidPosition = (
  position: number,
  arrayLength: number,
): boolean => {
  return position >= 0 && position < arrayLength;
};

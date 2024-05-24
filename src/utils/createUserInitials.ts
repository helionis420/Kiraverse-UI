export const createUserInitials = (value?: string | null) => {
  if (!value) {
    return '';
  }

  return value
    .split(' ')
    .map((word) => {
      return word.charAt(0);
    })
    .join('')
    .toUpperCase();
};

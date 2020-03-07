export const drawer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return !state;
    case "CLOSE_DRAWER":
      return (state = false);
    default:
      return state;
  }
};

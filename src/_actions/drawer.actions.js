const openDrawer = () => {
  return {
    type: "OPEN_DRAWER"
  };
};

const closeDrawer = () => {
  return {
    type: "CLOSE_DRAWER"
  };
};

export default {
  openDrawer
};
export const drawerAction = {
  openDrawer,
  closeDrawer
};

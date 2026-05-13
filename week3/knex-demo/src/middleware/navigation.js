import menuItems from "../data/navigation.js";

export const loadNavigation = async (req, res, next) => {
  try {
    res.locals.menuItems = menuItems;

    next();
  } catch (error) {
    next(error);
  }
};

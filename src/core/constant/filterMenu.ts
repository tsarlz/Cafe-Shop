import { menuList } from './data';
export const filterMenu = (selectedMenu: string) => {
  const drinks = menuList[0].categories;
  const filterCategories = drinks.find(
    (category) => category.variety === selectedMenu
  );

  return filterCategories;
};

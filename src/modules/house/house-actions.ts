import { HOUSE_ITEM_CHANGE } from "./house-constats";

export const mouseModuleStateChange = (itemId: string) => ({
  type: HOUSE_ITEM_CHANGE,
  itemId
});

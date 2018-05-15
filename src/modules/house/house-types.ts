import { HOUSE_ITEM_CHANGE } from "./house-constats";

export interface IHouseModule {
  id: string;
  name: string;
  cost: number;
  coordinates: [number, number];
  src: string;
  active: boolean;
}

export type THouseState = IHouseModule[];

export interface IHouseProps {
  house: THouseState;
}

export interface IHouseAction {
  readonly type: typeof HOUSE_ITEM_CHANGE;
  readonly itemId: string;
}

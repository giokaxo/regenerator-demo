import DiscountFixed from '../models/discount-fixed';
import DiscountPercent from '../models/discount-percent';

export const Discount = Symbol('Discount');

export interface Discount {
  [Discount]: true;

  get type(): string;
  getType(): string;

  get context(): string | null;
  getContext(): string | null;
  setContext(value: null | string): this;  jsonSerialize(): Record<string, any>;
}

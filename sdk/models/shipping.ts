import ManualShipping from '../models/manual-shipping';
import RebillyShipping from '../models/rebilly-shipping';

export const Shipping = Symbol('Shipping');

export interface Shipping {
  [Shipping]: true;

  get calculator(): string;
  getCalculator(): string;

  get amount(): number | null;
  getAmount(): number | null;
  jsonSerialize(): Record<string, any>;
}

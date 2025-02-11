import ManualTax from '../models/manual-tax';
import RebillyAvalaraTax from '../models/rebilly-avalara-tax';
import RebillyTaxJarTax from '../models/rebilly-tax-jar-tax';

export const Taxes = Symbol('Taxes');

export interface Taxes {
  [Taxes]: true;

  get calculator(): string;
  getCalculator(): string;

  get amount(): number | null;
  getAmount(): number | null;

  get items(): Array<any> | null;
  getItems(): Array<any> | null;
  setItems(value: Array<any>): this;  jsonSerialize(): Record<string, any>;
}

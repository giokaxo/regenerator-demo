import FixedFeeFormula from '../models/fixed-fee-formula';
import PercentageFeeFormula from '../models/percentage-fee-formula';

export const FeeFormula = Symbol('FeeFormula');

export interface FeeFormula {
  [FeeFormula]: true;

  get type(): string;
  getType(): string;

  get currency(): string;
  getCurrency(): string;
  setCurrency(value: string): this;  jsonSerialize(): Record<string, any>;
}

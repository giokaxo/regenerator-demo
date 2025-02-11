import FixedFeeFormula from '../models/fixed-fee-formula';
import PercentageFeeFormula from '../models/percentage-fee-formula';
import { FeeFormula } from '../models/fee-formula';

export default class FeeFormulaFactory {
  static from(data: any = {}): FeeFormula {
    switch(data.type) {
      case 'fixed-fee': return new FixedFeeFormula(data);
      case 'percentage': return new PercentageFeeFormula(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

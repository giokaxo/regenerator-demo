import PlanFormulaFixedFee from '../models/plan-formula-fixed-fee';
import PlanFormulaFlatRate from '../models/plan-formula-flat-rate';
import PlanFormulaStairstep from '../models/plan-formula-stairstep';
import PlanFormulaTiered from '../models/plan-formula-tiered';
import PlanFormulaVolume from '../models/plan-formula-volume';
import { PlanPriceFormula } from '../models/plan-price-formula';

export default class PlanPriceFormulaFactory {
  static from(data: any = {}): PlanPriceFormula {
    switch(data.formula) {
      case 'fixed-fee': return new PlanFormulaFixedFee(data);
      case 'flat-rate': return new PlanFormulaFlatRate(data);
      case 'stairstep': return new PlanFormulaStairstep(data);
      case 'tiered': return new PlanFormulaTiered(data);
      case 'volume': return new PlanFormulaVolume(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

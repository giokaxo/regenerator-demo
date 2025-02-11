import PlanFormulaFixedFee from '../models/plan-formula-fixed-fee';
import PlanFormulaFlatRate from '../models/plan-formula-flat-rate';
import PlanFormulaStairstep from '../models/plan-formula-stairstep';
import PlanFormulaTiered from '../models/plan-formula-tiered';
import PlanFormulaVolume from '../models/plan-formula-volume';

export const PlanPriceFormula = Symbol('PlanPriceFormula');

export interface PlanPriceFormula {
  [PlanPriceFormula]: true;

  get formula(): string;
  getFormula(): string;
  jsonSerialize(): Record<string, any>;
}

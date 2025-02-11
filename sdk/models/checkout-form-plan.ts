import CheckoutFormFixedPlan from '../models/checkout-form-fixed-plan';
import CheckoutFormVariablePlan from '../models/checkout-form-variable-plan';

export const CheckoutFormPlan = Symbol('CheckoutFormPlan');

export interface CheckoutFormPlan {
  [CheckoutFormPlan]: true;

  get type(): string;
  getType(): string;

  get planId(): string;
  getPlanId(): string;
  setPlanId(value: string): this;
  get quantity(): number;
  getQuantity(): number;
  setQuantity(value: number | string): this;  jsonSerialize(): Record<string, any>;
}

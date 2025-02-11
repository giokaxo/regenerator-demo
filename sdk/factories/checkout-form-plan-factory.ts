import CheckoutFormFixedPlan from '../models/checkout-form-fixed-plan';
import CheckoutFormVariablePlan from '../models/checkout-form-variable-plan';
import { CheckoutFormPlan } from '../models/checkout-form-plan';

export default class CheckoutFormPlanFactory {
  static from(data: any = {}): CheckoutFormPlan {
    switch(data.type) {
      case 'fixed': return new CheckoutFormFixedPlan(data);
      case 'variable': return new CheckoutFormVariablePlan(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

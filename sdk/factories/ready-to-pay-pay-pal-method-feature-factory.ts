import PayPalBillingAgreementFeature from '../models/pay-pal-billing-agreement-feature';
import { ReadyToPayPayPalMethodFeature } from '../models/ready-to-pay-pay-pal-method-feature';

export default class ReadyToPayPayPalMethodFeatureFactory {
  static from(data: any = {}): ReadyToPayPayPalMethodFeature {
    switch(data.name) {
      case 'PayPal billing agreement': return new PayPalBillingAgreementFeature(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

import ApplePayFeature from '../models/apple-pay-feature';
import GooglePayFeature from '../models/google-pay-feature';
import SamsungPayFeature from '../models/samsung-pay-feature';
import { PaymentCardFeature } from '../models/payment-card-feature';

export default class PaymentCardFeatureFactory {
  static from(data: any = {}): PaymentCardFeature {
    switch(data.name) {
      case 'Apple Pay': return new ApplePayFeature(data);
      case 'Google Pay': return new GooglePayFeature(data);
      case 'Samsung Pay': return new SamsungPayFeature(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

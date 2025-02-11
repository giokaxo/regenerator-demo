import ApplePayFeature from '../models/apple-pay-feature';
import GooglePayFeature from '../models/google-pay-feature';
import SamsungPayFeature from '../models/samsung-pay-feature';

export const PaymentCardFeature = Symbol('PaymentCardFeature');

export interface PaymentCardFeature {
  [PaymentCardFeature]: true;

  get name(): string;
  getName(): string;
  jsonSerialize(): Record<string, any>;
}

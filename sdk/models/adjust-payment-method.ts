import AdjustReadyToPayAch from '../models/adjust-ready-to-pay-ach';
import AdjustReadyToPayGeneric from '../models/adjust-ready-to-pay-generic';
import AdjustReadyToPayPaymentCard from '../models/adjust-ready-to-pay-payment-card';
import AdjustReadyToPayPaypal from '../models/adjust-ready-to-pay-paypal';

export const AdjustPaymentMethod = Symbol('AdjustPaymentMethod');

export interface AdjustPaymentMethod {
  [AdjustPaymentMethod]: true;

  get paymentMethod(): string;
  getPaymentMethod(): string;
  jsonSerialize(): Record<string, any>;
}

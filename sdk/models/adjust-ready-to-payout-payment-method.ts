import AdjustReadyToPayoutGeneric from '../models/adjust-ready-to-payout-generic';

export const AdjustReadyToPayoutPaymentMethod = Symbol('AdjustReadyToPayoutPaymentMethod');

export interface AdjustReadyToPayoutPaymentMethod {
  [AdjustReadyToPayoutPaymentMethod]: true;

  get paymentMethod(): string;
  getPaymentMethod(): string;
  jsonSerialize(): Record<string, any>;
}

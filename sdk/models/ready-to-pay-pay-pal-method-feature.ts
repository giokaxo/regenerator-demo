import PayPalBillingAgreementFeature from '../models/pay-pal-billing-agreement-feature';

export const ReadyToPayPayPalMethodFeature = Symbol('ReadyToPayPayPalMethodFeature');

export interface ReadyToPayPayPalMethodFeature {
  [ReadyToPayPayPalMethodFeature]: true;

  get name(): string;
  getName(): string;

  get paypalMerchantId(): string;
  getPaypalMerchantId(): string;
  setPaypalMerchantId(value: string): this;
  get paypalClientId(): string;
  getPaypalClientId(): string;
  setPaypalClientId(value: string): this;
  get billingAgreementToken(): string;
  getBillingAgreementToken(): string;
  setBillingAgreementToken(value: string): this;
  get expirationTime(): Date;
  getExpirationTime(): Date;
  setExpirationTime(value: Date | string): this;  jsonSerialize(): Record<string, any>;
}

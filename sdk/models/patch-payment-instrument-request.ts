import BankAccountUpdatePlain from '../models/bank-account-update-plain';
import PaymentCardUpdatePlain from '../models/payment-card-update-plain';
import PaymentInstrumentUpdateToken from '../models/payment-instrument-update-token';
import ContactObject from '../models/contact-object';

export const PatchPaymentInstrumentRequest = Symbol('PatchPaymentInstrumentRequest');

export interface PatchPaymentInstrumentRequest {
  [PatchPaymentInstrumentRequest]: true;

  get billingAddress(): ContactObject | null;
  getBillingAddress(): ContactObject | null;
  setBillingAddress(value: null | ContactObject | any): this;
  get stickyGatewayAccountId(): string | null;
  getStickyGatewayAccountId(): string | null;
  setStickyGatewayAccountId(value: null | string): this;
  get customFields(): Record<string, any> | null;
  getCustomFields(): Record<string, any> | null;
  setCustomFields(value: null | Record<string, any>): this;
  get useAsBackup(): boolean | null;
  getUseAsBackup(): boolean | null;
  setUseAsBackup(value: null | boolean): this;  jsonSerialize(): Record<string, any>;
}

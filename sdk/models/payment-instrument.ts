import AlternativeInstrument from '../models/alternative-instrument';
import BankAccount from '../models/bank-account';
import KhelocardCard from '../models/khelocard-card';
import PaymentCard from '../models/payment-card';
import PayPalAccount from '../models/pay-pal-account';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';

export const PaymentInstrument = Symbol('PaymentInstrument');

export interface PaymentInstrument {
  [PaymentInstrument]: true;

  get method(): string;
  getMethod(): string;

  get id(): string | null;
  getId(): string | null;

  get customerId(): string | null;
  getCustomerId(): string | null;
  setCustomerId(value: string): this;
  get billingAddress(): ContactObject | null;
  getBillingAddress(): ContactObject | null;
  setBillingAddress(value: ContactObject | any): this;
  get useAsBackup(): boolean | null;
  getUseAsBackup(): boolean | null;
  setUseAsBackup(value: null | boolean): this;
  get createdTime(): Date | null;
  getCreatedTime(): Date | null;

  get updatedTime(): Date | null;
  getUpdatedTime(): Date | null;

  get customFields(): Record<string, any> | null;
  getCustomFields(): Record<string, any> | null;
  setCustomFields(value: null | Record<string, any>): this;
  get stickyGatewayAccountId(): string | null;
  getStickyGatewayAccountId(): string | null;

  get riskMetadata(): RiskMetadata | null;
  getRiskMetadata(): RiskMetadata | null;
  setRiskMetadata(value: null | RiskMetadata | any): this;
  get revision(): number | null;
  getRevision(): number | null;

  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}

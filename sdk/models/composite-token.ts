import AlternativePaymentToken from '../models/alternative-payment-token';
import BankAccountToken from '../models/bank-account-token';
import DigitalWalletToken from '../models/digital-wallet-token';
import KhelocardCardToken from '../models/khelocard-card-token';
import KlarnaToken from '../models/klarna-token';
import PaymentCardToken from '../models/payment-card-token';
import PayPalToken from '../models/pay-pal-token';
import PlaidAccountToken from '../models/plaid-account-token';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';
import LeadSource from '../models/lead-source';

export const CompositeToken = Symbol('CompositeToken');

export interface CompositeToken {
  [CompositeToken]: true;

  get method(): string;
  getMethod(): string;

  get billingAddress(): ContactObject | null;
  getBillingAddress(): ContactObject | null;

  get id(): string | null;
  getId(): string | null;

  get isUsed(): boolean | null;
  getIsUsed(): boolean | null;

  get riskMetadata(): RiskMetadata | null;
  getRiskMetadata(): RiskMetadata | null;
  setRiskMetadata(value: null | RiskMetadata | any): this;
  get leadSource(): LeadSource | null;
  getLeadSource(): LeadSource | null;
  setLeadSource(value: null | LeadSource | any): this;
  get createdTime(): Date | null;
  getCreatedTime(): Date | null;

  get updatedTime(): Date | null;
  getUpdatedTime(): Date | null;

  get usageTime(): Date | null;
  getUsageTime(): Date | null;

  get expirationTime(): Date | null;
  getExpirationTime(): Date | null;

  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}

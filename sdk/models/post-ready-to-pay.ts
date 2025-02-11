import ReadyToPayAmount from '../models/ready-to-pay-amount';
import ReadyToPayItems from '../models/ready-to-pay-items';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';

export const PostReadyToPay = Symbol('PostReadyToPay');

export interface PostReadyToPay {
  [PostReadyToPay]: true;

  get websiteId(): string;
  getWebsiteId(): string;
  setWebsiteId(value: string): this;
  get billingAddress(): ContactObject | null;
  getBillingAddress(): ContactObject | null;
  setBillingAddress(value: null | ContactObject | any): this;
  get riskMetadata(): RiskMetadata;
  getRiskMetadata(): RiskMetadata;
  setRiskMetadata(value: RiskMetadata | any): this;  jsonSerialize(): Record<string, any>;
}

import ShippingFactory from '../factories/shipping-factory';
import OneTimeSale from '../models/one-time-sale';
import Subscription from '../models/subscription';
import ContactObject from '../models/contact-object';
import { Shipping } from '../models/shipping';
import RiskMetadata from '../models/risk-metadata';

export const SubscriptionOrOneTimeSale = Symbol('SubscriptionOrOneTimeSale');

export interface SubscriptionOrOneTimeSale {
  [SubscriptionOrOneTimeSale]: true;

  get orderType(): string;
  getOrderType(): string;

  get id(): string | null;
  getId(): string | null;

  get customerId(): string;
  getCustomerId(): string;
  setCustomerId(value: string): this;
  get organizationId(): string | null;
  getOrganizationId(): string | null;

  get billingStatus(): string | null;
  getBillingStatus(): string | null;

  get websiteId(): string;
  getWebsiteId(): string;
  setWebsiteId(value: string): this;
  get currency(): string | null;
  getCurrency(): string | null;

  get initialInvoiceId(): string | null;
  getInitialInvoiceId(): string | null;

  get recentInvoiceId(): string | null;
  getRecentInvoiceId(): string | null;

  get items(): Array<any>;
  getItems(): Array<any>;
  setItems(value: Array<any>): this;
  get deliveryAddress(): ContactObject | null;
  getDeliveryAddress(): ContactObject | null;
  setDeliveryAddress(value: null | ContactObject | any): this;
  get billingAddress(): ContactObject | null;
  getBillingAddress(): ContactObject | null;
  setBillingAddress(value: null | ContactObject | any): this;
  get activationTime(): Date | null;
  getActivationTime(): Date | null;

  get voidTime(): Date | null;
  getVoidTime(): Date | null;

  get abandonTime(): Date | null;
  getAbandonTime(): Date | null;
  setAbandonTime(value: null | Date | string): this;
  get couponIds(): Array<any> | null;
  getCouponIds(): Array<any> | null;
  setCouponIds(value: null | Array<any>): this;
  get poNumber(): string | null;
  getPoNumber(): string | null;
  setPoNumber(value: null | string): this;
  get shipping(): Shipping | null;
  getShipping(): Shipping | null;
  setShipping(value: null | Shipping | any): this;
  get notes(): string | null;
  getNotes(): string | null;
  setNotes(value: null | string): this;
  get revision(): number | null;
  getRevision(): number | null;

  get riskMetadata(): RiskMetadata | null;
  getRiskMetadata(): RiskMetadata | null;
  setRiskMetadata(value: null | RiskMetadata | any): this;
  get customFields(): Record<string, any> | null;
  getCustomFields(): Record<string, any> | null;
  setCustomFields(value: null | Record<string, any>): this;
  get createdTime(): Date | null;
  getCreatedTime(): Date | null;

  get updatedTime(): Date | null;
  getUpdatedTime(): Date | null;

  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}

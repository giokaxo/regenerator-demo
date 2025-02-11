import ShippingFactory from '../factories/shipping-factory';
import TaxesFactory from '../factories/taxes-factory';
import QuoteChangeOrder from '../models/quote-change-order';
import QuoteCreateOrder from '../models/quote-create-order';
import QuoteReactivateOrder from '../models/quote-reactivate-order';
import { Shipping } from '../models/shipping';
import { Taxes } from '../models/taxes';

export const Quote = Symbol('Quote');

export interface Quote {
  [Quote]: true;

  get action(): string;
  getAction(): string;

  get id(): string | null;
  getId(): string | null;

  get type(): string | null;
  getType(): string | null;

  get acceptanceConditions(): Array<any> | null;
  getAcceptanceConditions(): Array<any> | null;
  setAcceptanceConditions(value: null | Array<any>): this;
  get subscriptionId(): string | null;
  getSubscriptionId(): string | null;

  get invoiceId(): string | null;
  getInvoiceId(): string | null;

  get status(): string | null;
  getStatus(): string | null;

  get websiteId(): string;
  getWebsiteId(): string;
  setWebsiteId(value: string): this;
  get customerId(): string;
  getCustomerId(): string;
  setCustomerId(value: string): this;
  get autopay(): boolean | null;
  getAutopay(): boolean | null;
  setAutopay(value: null | boolean): this;
  get paymentTerms(): string | null;
  getPaymentTerms(): string | null;
  setPaymentTerms(value: null | string): this;
  get expirationTime(): Date | null;
  getExpirationTime(): Date | null;
  setExpirationTime(value: null | Date | string): this;
  get issuedTime(): Date | null;
  getIssuedTime(): Date | null;

  get acceptedTime(): Date | null;
  getAcceptedTime(): Date | null;

  get rejectedTime(): Date | null;
  getRejectedTime(): Date | null;

  get canceledTime(): Date | null;
  getCanceledTime(): Date | null;

  get createdTime(): Date | null;
  getCreatedTime(): Date | null;

  get updatedTime(): Date | null;
  getUpdatedTime(): Date | null;

  get redirectUrl(): string | null;
  getRedirectUrl(): string | null;
  setRedirectUrl(value: null | string): this;
  get shipping(): Shipping | null;
  getShipping(): Shipping | null;
  setShipping(value: null | Shipping | any): this;
  get tax(): Taxes | null;
  getTax(): Taxes | null;
  setTax(value: null | Taxes | any): this;
  get couponIds(): Array<any> | null;
  getCouponIds(): Array<any> | null;
  setCouponIds(value: null | Array<any>): this;
  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}

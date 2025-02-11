import ShippingFactory from '../factories/shipping-factory';
import TaxesFactory from '../factories/taxes-factory';
import { Quote } from '../models/quote';
import QuoteReactivateOrderInvoicePreview from '../models/quote-reactivate-order-invoice-preview';
import QuoteReactivateOrderSignature from '../models/quote-reactivate-order-signature';
import { Shipping } from '../models/shipping';
import { Taxes } from '../models/taxes';
import QuoteReactivateOrderEmbedded from '../models/quote-reactivate-order-embedded';
import QuoteReactivateOrderAcceptanceFulfillment from '../models/quote-reactivate-order-acceptance-fulfillment';
import QuoteReactivateOrderItems from '../models/quote-reactivate-order-items';
import ResourceLink from '../models/resource-link';

export default class QuoteReactivateOrder implements Quote {
  get [Quote](): true {
    return true;
  }

  TYPE_SUBSCRIPTION_ORDER = 'subscription-order';

  TYPE_ONE_TIME_ORDER = 'one-time-order';

  ACCEPTANCE_CONDITIONS_CUSTOMER = 'customer';

  ACCEPTANCE_CONDITIONS_PAYMENT = 'payment';

  STATUS_DRAFT = 'draft';

  STATUS_ISSUED = 'issued';

  STATUS_ACCEPTED = 'accepted';

  STATUS_REJECTED = 'rejected';

  STATUS_CANCELED = 'canceled';

  STATUS_EXPIRED = 'expired';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acceptanceConditions')) {
      this.setAcceptanceConditions(data['acceptanceConditions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acceptanceFulfillment')) {
      this.setAcceptanceFulfillment(data['acceptanceFulfillment']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionId')) {
      this.setSubscriptionId(data['subscriptionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceId')) {
      this.setInvoiceId(data['invoiceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'effectiveTime')) {
      this.setEffectiveTime(data['effectiveTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'renewalTime')) {
      this.setRenewalTime(data['renewalTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentId')) {
      this.setPaymentInstrumentId(data['paymentInstrumentId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoicePreview')) {
      this.setInvoicePreview(data['invoicePreview']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'autopay')) {
      this.setAutopay(data['autopay']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentTerms')) {
      this.setPaymentTerms(data['paymentTerms']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationTime')) {
      this.setExpirationTime(data['expirationTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issuedTime')) {
      this.setIssuedTime(data['issuedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acceptedTime')) {
      this.setAcceptedTime(data['acceptedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rejectedTime')) {
      this.setRejectedTime(data['rejectedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'canceledTime')) {
      this.setCanceledTime(data['canceledTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'redirectUrl')) {
      this.setRedirectUrl(data['redirectUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'signature')) {
      this.setSignature(data['signature']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shipping')) {
      this.setShipping(data['shipping']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tax')) {
      this.setTax(data['tax']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'couponIds')) {
      this.setCouponIds(data['couponIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  public get action() {
    return 'reactivate';
  }

  public getAction() {
    return 'reactivate';
  }

  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  private setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get acceptanceConditions(): Array<any> | null {
    return this._fields['acceptanceConditions'] ?? null;
  }
  
  getAcceptanceConditions(): Array<any> | null {
      return this._fields['acceptanceConditions'] ?? null;
  }

  setAcceptanceConditions(value: null | Array<any>) {
    this._fields['acceptanceConditions'] = value;

    return this;
  }

  get acceptanceFulfillment(): Array<any> | null {
    return this._fields['acceptanceFulfillment'] ?? null;
  }
  
  getAcceptanceFulfillment(): Array<any> | null {
      return this._fields['acceptanceFulfillment'] ?? null;
  }

  private setAcceptanceFulfillment(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof QuoteReactivateOrderAcceptanceFulfillment ? value : new QuoteReactivateOrderAcceptanceFulfillment(value),
    ) : null;

    this._fields['acceptanceFulfillment'] = value;

    return this;
  }

  get subscriptionId(): string {
    return this._fields['subscriptionId'];
  }
  
  getSubscriptionId(): string {
      return this._fields['subscriptionId'];
  }

  setSubscriptionId(value: string) {
    this._fields['subscriptionId'] = value;

    return this;
  }

  get invoiceId(): string | null {
    return this._fields['invoiceId'] ?? null;
  }
  
  getInvoiceId(): string | null {
      return this._fields['invoiceId'] ?? null;
  }

  private setInvoiceId(value: null | string) {
    this._fields['invoiceId'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get websiteId(): string {
    return this._fields['websiteId'];
  }
  
  getWebsiteId(): string {
      return this._fields['websiteId'];
  }

  setWebsiteId(value: string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
  }

  get items(): Array<any> {
    return this._fields['items'];
  }
  
  getItems(): Array<any> {
      return this._fields['items'];
  }

  setItems(value: Array<any>) {
    value = value.map(
      (value) => value instanceof QuoteReactivateOrderItems ? value : new QuoteReactivateOrderItems(value),
    );

    this._fields['items'] = value;

    return this;
  }

  get effectiveTime(): Date | null {
    return this._fields['effectiveTime'] ?? null;
  }
  
  getEffectiveTime(): Date | null {
      return this._fields['effectiveTime'] ?? null;
  }

  setEffectiveTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['effectiveTime'] = value;

    return this;
  }

  get renewalTime(): Date | null {
    return this._fields['renewalTime'] ?? null;
  }
  
  getRenewalTime(): Date | null {
      return this._fields['renewalTime'] ?? null;
  }

  setRenewalTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['renewalTime'] = value;

    return this;
  }

  get paymentInstrumentId(): string | null {
    return this._fields['paymentInstrumentId'] ?? null;
  }
  
  getPaymentInstrumentId(): string | null {
      return this._fields['paymentInstrumentId'] ?? null;
  }

  setPaymentInstrumentId(value: null | string) {
    this._fields['paymentInstrumentId'] = value;

    return this;
  }

  get invoicePreview(): QuoteReactivateOrderInvoicePreview | null {
    return this._fields['invoicePreview'] ?? null;
  }
  
  getInvoicePreview(): QuoteReactivateOrderInvoicePreview | null {
      return this._fields['invoicePreview'] ?? null;
  }

  setInvoicePreview(value: null | QuoteReactivateOrderInvoicePreview | any) {
    if (value !== null && !(value instanceof QuoteReactivateOrderInvoicePreview)) {
      value = new QuoteReactivateOrderInvoicePreview(value);
    }

    this._fields['invoicePreview'] = value;

    return this;
  }

  get autopay(): boolean | null {
    return this._fields['autopay'] ?? null;
  }
  
  getAutopay(): boolean | null {
      return this._fields['autopay'] ?? null;
  }

  setAutopay(value: null | boolean) {
    this._fields['autopay'] = value;

    return this;
  }

  get paymentTerms(): string | null {
    return this._fields['paymentTerms'] ?? null;
  }
  
  getPaymentTerms(): string | null {
      return this._fields['paymentTerms'] ?? null;
  }

  setPaymentTerms(value: null | string) {
    this._fields['paymentTerms'] = value;

    return this;
  }

  get expirationTime(): Date | null {
    return this._fields['expirationTime'] ?? null;
  }
  
  getExpirationTime(): Date | null {
      return this._fields['expirationTime'] ?? null;
  }

  setExpirationTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expirationTime'] = value;

    return this;
  }

  get issuedTime(): Date | null {
    return this._fields['issuedTime'] ?? null;
  }
  
  getIssuedTime(): Date | null {
      return this._fields['issuedTime'] ?? null;
  }

  private setIssuedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['issuedTime'] = value;

    return this;
  }

  get acceptedTime(): Date | null {
    return this._fields['acceptedTime'] ?? null;
  }
  
  getAcceptedTime(): Date | null {
      return this._fields['acceptedTime'] ?? null;
  }

  private setAcceptedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['acceptedTime'] = value;

    return this;
  }

  get rejectedTime(): Date | null {
    return this._fields['rejectedTime'] ?? null;
  }
  
  getRejectedTime(): Date | null {
      return this._fields['rejectedTime'] ?? null;
  }

  private setRejectedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['rejectedTime'] = value;

    return this;
  }

  get canceledTime(): Date | null {
    return this._fields['canceledTime'] ?? null;
  }
  
  getCanceledTime(): Date | null {
      return this._fields['canceledTime'] ?? null;
  }

  private setCanceledTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['canceledTime'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

    return this;
  }

  get redirectUrl(): string | null {
    return this._fields['redirectUrl'] ?? null;
  }
  
  getRedirectUrl(): string | null {
      return this._fields['redirectUrl'] ?? null;
  }

  setRedirectUrl(value: null | string) {
    this._fields['redirectUrl'] = value;

    return this;
  }

  get signature(): QuoteReactivateOrderSignature | null {
    return this._fields['signature'] ?? null;
  }
  
  getSignature(): QuoteReactivateOrderSignature | null {
      return this._fields['signature'] ?? null;
  }

  setSignature(value: null | QuoteReactivateOrderSignature | any) {
    if (value !== null && !(value instanceof QuoteReactivateOrderSignature)) {
      value = new QuoteReactivateOrderSignature(value);
    }

    this._fields['signature'] = value;

    return this;
  }

  get shipping(): Shipping | null {
    return this._fields['shipping'] ?? null;
  }
  
  getShipping(): Shipping | null {
      return this._fields['shipping'] ?? null;
  }

  setShipping(value: null | Shipping | any) {
    if (value !== null && !(value[Shipping])) {
      value = ShippingFactory.from(value);
    }

    this._fields['shipping'] = value;

    return this;
  }

  get tax(): Taxes | null {
    return this._fields['tax'] ?? null;
  }
  
  getTax(): Taxes | null {
      return this._fields['tax'] ?? null;
  }

  setTax(value: null | Taxes | any) {
    if (value !== null && !(value[Taxes])) {
      value = TaxesFactory.from(value);
    }

    this._fields['tax'] = value;

    return this;
  }

  get couponIds(): Array<any> | null {
    return this._fields['couponIds'] ?? null;
  }
  
  getCouponIds(): Array<any> | null {
      return this._fields['couponIds'] ?? null;
  }

  setCouponIds(value: null | Array<any>) {
    this._fields['couponIds'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  get embedded(): QuoteReactivateOrderEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): QuoteReactivateOrderEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | QuoteReactivateOrderEmbedded | any) {
    if (value !== null && !(value instanceof QuoteReactivateOrderEmbedded)) {
      value = new QuoteReactivateOrderEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      action: 'reactivate',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acceptanceConditions')) {
      data['acceptanceConditions'] = this['acceptanceConditions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acceptanceFulfillment')) {
      data['acceptanceFulfillment'] = this['acceptanceFulfillment'] !== null
          ? this._fields['acceptanceFulfillment'].map((quoteReactivateOrderAcceptanceFulfillment: QuoteReactivateOrderAcceptanceFulfillment) => quoteReactivateOrderAcceptanceFulfillment.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionId')) {
      data['subscriptionId'] = this['subscriptionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceId')) {
      data['invoiceId'] = this['invoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'].map(
          (quoteReactivateOrderItems: QuoteReactivateOrderItems) => quoteReactivateOrderItems.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'effectiveTime')) {
      data['effectiveTime'] = this['effectiveTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'renewalTime')) {
      data['renewalTime'] = this['renewalTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentId')) {
      data['paymentInstrumentId'] = this['paymentInstrumentId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoicePreview')) {
      data['invoicePreview'] = this['invoicePreview']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'autopay')) {
      data['autopay'] = this['autopay'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentTerms')) {
      data['paymentTerms'] = this['paymentTerms'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationTime')) {
      data['expirationTime'] = this['expirationTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issuedTime')) {
      data['issuedTime'] = this['issuedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acceptedTime')) {
      data['acceptedTime'] = this['acceptedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectedTime')) {
      data['rejectedTime'] = this['rejectedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'canceledTime')) {
      data['canceledTime'] = this['canceledTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redirectUrl')) {
      data['redirectUrl'] = this['redirectUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'signature')) {
      data['signature'] = this['signature']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shipping')) {
      data['shipping'] = this['shipping']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tax')) {
      data['tax'] = this['tax']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'couponIds')) {
      data['couponIds'] = this['couponIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

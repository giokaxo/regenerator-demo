import ShippingFactory from '../factories/shipping-factory';
import TaxesFactory from '../factories/taxes-factory';
import { Quote } from '../models/quote';
import ContactObject from '../models/contact-object';
import QuoteCreateOrderInvoicePreview from '../models/quote-create-order-invoice-preview';
import QuoteCreateOrderSignature from '../models/quote-create-order-signature';
import { Shipping } from '../models/shipping';
import { Taxes } from '../models/taxes';
import QuoteCreateOrderEmbedded from '../models/quote-create-order-embedded';
import QuoteCreateOrderAcceptanceFulfillment from '../models/quote-create-order-acceptance-fulfillment';
import QuoteCreateOrderItems from '../models/quote-create-order-items';
import ResourceLink from '../models/resource-link';

export default class QuoteCreateOrder implements Quote {
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
    if (Object.prototype.hasOwnProperty.call(data, 'deliveryAddress')) {
      this.setDeliveryAddress(data['deliveryAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
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
    return 'create';
  }

  public getAction() {
    return 'create';
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
      (value) => value instanceof QuoteCreateOrderAcceptanceFulfillment ? value : new QuoteCreateOrderAcceptanceFulfillment(value),
    ) : null;

    this._fields['acceptanceFulfillment'] = value;

    return this;
  }

  get subscriptionId(): string | null {
    return this._fields['subscriptionId'] ?? null;
  }
  
  getSubscriptionId(): string | null {
      return this._fields['subscriptionId'] ?? null;
  }

  private setSubscriptionId(value: null | string) {
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
      (value) => value instanceof QuoteCreateOrderItems ? value : new QuoteCreateOrderItems(value),
    );

    this._fields['items'] = value;

    return this;
  }

  get deliveryAddress(): ContactObject | null {
    return this._fields['deliveryAddress'] ?? null;
  }
  
  getDeliveryAddress(): ContactObject | null {
      return this._fields['deliveryAddress'] ?? null;
  }

  setDeliveryAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['deliveryAddress'] = value;

    return this;
  }

  get billingAddress(): ContactObject | null {
    return this._fields['billingAddress'] ?? null;
  }
  
  getBillingAddress(): ContactObject | null {
      return this._fields['billingAddress'] ?? null;
  }

  setBillingAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

    return this;
  }

  get invoicePreview(): QuoteCreateOrderInvoicePreview | null {
    return this._fields['invoicePreview'] ?? null;
  }
  
  getInvoicePreview(): QuoteCreateOrderInvoicePreview | null {
      return this._fields['invoicePreview'] ?? null;
  }

  setInvoicePreview(value: null | QuoteCreateOrderInvoicePreview | any) {
    if (value !== null && !(value instanceof QuoteCreateOrderInvoicePreview)) {
      value = new QuoteCreateOrderInvoicePreview(value);
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

  get signature(): QuoteCreateOrderSignature | null {
    return this._fields['signature'] ?? null;
  }
  
  getSignature(): QuoteCreateOrderSignature | null {
      return this._fields['signature'] ?? null;
  }

  setSignature(value: null | QuoteCreateOrderSignature | any) {
    if (value !== null && !(value instanceof QuoteCreateOrderSignature)) {
      value = new QuoteCreateOrderSignature(value);
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

  get embedded(): QuoteCreateOrderEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): QuoteCreateOrderEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | QuoteCreateOrderEmbedded | any) {
    if (value !== null && !(value instanceof QuoteCreateOrderEmbedded)) {
      value = new QuoteCreateOrderEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      action: 'create',
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
          ? this._fields['acceptanceFulfillment'].map((quoteCreateOrderAcceptanceFulfillment: QuoteCreateOrderAcceptanceFulfillment) => quoteCreateOrderAcceptanceFulfillment.jsonSerialize())
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
          (quoteCreateOrderItems: QuoteCreateOrderItems) => quoteCreateOrderItems.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deliveryAddress')) {
      data['deliveryAddress'] = this['deliveryAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
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

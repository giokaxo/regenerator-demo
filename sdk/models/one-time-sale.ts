import ShippingFactory from '../factories/shipping-factory';
import { SubscriptionOrOneTimeSale } from '../models/subscription-or-one-time-sale';
import ContactObject from '../models/contact-object';
import { Shipping } from '../models/shipping';
import RiskMetadata from '../models/risk-metadata';
import OneTimeSaleEmbedded from '../models/one-time-sale-embedded';
import SubscriptionOrOneTimeSaleItem from '../models/subscription-or-one-time-sale-item';
import ResourceLink from '../models/resource-link';

export default class OneTimeSale implements SubscriptionOrOneTimeSale {
  get [SubscriptionOrOneTimeSale](): true {
    return true;
  }

  STATUS_PENDING = 'pending';

  STATUS_ABANDONED = 'abandoned';

  STATUS_COMPLETED = 'completed';

  STATUS_CANCELED = 'canceled';

  BILLING_STATUS_DRAFT = 'draft';

  BILLING_STATUS_UNPAID = 'unpaid';

  BILLING_STATUS_PAST_DUE = 'past-due';

  BILLING_STATUS_ABANDONED = 'abandoned';

  BILLING_STATUS_PAID = 'paid';

  BILLING_STATUS_VOIDED = 'voided';

  BILLING_STATUS_REFUNDED = 'refunded';

  BILLING_STATUS_DISPUTED = 'disputed';

  BILLING_STATUS_PARTIALLY_REFUNDED = 'partially-refunded';

  BILLING_STATUS_PARTIALLY_PAID = 'partially-paid';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingStatus')) {
      this.setBillingStatus(data['billingStatus']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'initialInvoiceId')) {
      this.setInitialInvoiceId(data['initialInvoiceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recentInvoiceId')) {
      this.setRecentInvoiceId(data['recentInvoiceId']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'activationTime')) {
      this.setActivationTime(data['activationTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'voidTime')) {
      this.setVoidTime(data['voidTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'abandonTime')) {
      this.setAbandonTime(data['abandonTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'couponIds')) {
      this.setCouponIds(data['couponIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'poNumber')) {
      this.setPoNumber(data['poNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shipping')) {
      this.setShipping(data['shipping']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notes')) {
      this.setNotes(data['notes']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  public get orderType() {
    return 'one-time-order';
  }

  public getOrderType() {
    return 'one-time-order';
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

  get organizationId(): string | null {
    return this._fields['organizationId'] ?? null;
  }
  
  getOrganizationId(): string | null {
      return this._fields['organizationId'] ?? null;
  }

  private setOrganizationId(value: null | string) {
    this._fields['organizationId'] = value;

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

  get billingStatus(): string | null {
    return this._fields['billingStatus'] ?? null;
  }
  
  getBillingStatus(): string | null {
      return this._fields['billingStatus'] ?? null;
  }

  private setBillingStatus(value: null | string) {
    this._fields['billingStatus'] = value;

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

  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  private setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get initialInvoiceId(): string | null {
    return this._fields['initialInvoiceId'] ?? null;
  }
  
  getInitialInvoiceId(): string | null {
      return this._fields['initialInvoiceId'] ?? null;
  }

  private setInitialInvoiceId(value: null | string) {
    this._fields['initialInvoiceId'] = value;

    return this;
  }

  get recentInvoiceId(): string | null {
    return this._fields['recentInvoiceId'] ?? null;
  }
  
  getRecentInvoiceId(): string | null {
      return this._fields['recentInvoiceId'] ?? null;
  }

  private setRecentInvoiceId(value: null | string) {
    this._fields['recentInvoiceId'] = value;

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
      (value) => value instanceof SubscriptionOrOneTimeSaleItem ? value : new SubscriptionOrOneTimeSaleItem(value),
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

  get activationTime(): Date | null {
    return this._fields['activationTime'] ?? null;
  }
  
  getActivationTime(): Date | null {
      return this._fields['activationTime'] ?? null;
  }

  private setActivationTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['activationTime'] = value;

    return this;
  }

  get voidTime(): Date | null {
    return this._fields['voidTime'] ?? null;
  }
  
  getVoidTime(): Date | null {
      return this._fields['voidTime'] ?? null;
  }

  private setVoidTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['voidTime'] = value;

    return this;
  }

  get abandonTime(): Date | null {
    return this._fields['abandonTime'] ?? null;
  }
  
  getAbandonTime(): Date | null {
      return this._fields['abandonTime'] ?? null;
  }

  setAbandonTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['abandonTime'] = value;

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

  get poNumber(): string | null {
    return this._fields['poNumber'] ?? null;
  }
  
  getPoNumber(): string | null {
      return this._fields['poNumber'] ?? null;
  }

  setPoNumber(value: null | string) {
    this._fields['poNumber'] = value;

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

  get notes(): string | null {
    return this._fields['notes'] ?? null;
  }
  
  getNotes(): string | null {
      return this._fields['notes'] ?? null;
  }

  setNotes(value: null | string) {
    this._fields['notes'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  private setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

    return this;
  }

  get riskMetadata(): RiskMetadata | null {
    return this._fields['riskMetadata'] ?? null;
  }
  
  getRiskMetadata(): RiskMetadata | null {
      return this._fields['riskMetadata'] ?? null;
  }

  setRiskMetadata(value: null | RiskMetadata | any) {
    if (value !== null && !(value instanceof RiskMetadata)) {
      value = new RiskMetadata(value);
    }

    this._fields['riskMetadata'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

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

  get embedded(): OneTimeSaleEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): OneTimeSaleEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | OneTimeSaleEmbedded | any) {
    if (value !== null && !(value instanceof OneTimeSaleEmbedded)) {
      value = new OneTimeSaleEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      orderType: 'one-time-order',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingStatus')) {
      data['billingStatus'] = this['billingStatus'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'initialInvoiceId')) {
      data['initialInvoiceId'] = this['initialInvoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recentInvoiceId')) {
      data['recentInvoiceId'] = this['recentInvoiceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'].map(
          (subscriptionOrOneTimeSaleItem: SubscriptionOrOneTimeSaleItem) => subscriptionOrOneTimeSaleItem.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deliveryAddress')) {
      data['deliveryAddress'] = this['deliveryAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'activationTime')) {
      data['activationTime'] = this['activationTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'voidTime')) {
      data['voidTime'] = this['voidTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'abandonTime')) {
      data['abandonTime'] = this['abandonTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'couponIds')) {
      data['couponIds'] = this['couponIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'poNumber')) {
      data['poNumber'] = this['poNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shipping')) {
      data['shipping'] = this['shipping']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notes')) {
      data['notes'] = this['notes'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
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

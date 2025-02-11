import ShippingFactory from '../factories/shipping-factory';
import TaxesFactory from '../factories/taxes-factory';
import { Shipping } from '../models/shipping';
import { Taxes } from '../models/taxes';
import ContactObject from '../models/contact-object';
import UpcomingInvoiceEmbedded from '../models/upcoming-invoice-embedded';
import UpcomingInvoiceItem from '../models/upcoming-invoice-item';
import UpcomingInvoiceDiscounts from '../models/upcoming-invoice-discounts';
import ResourceLink from '../models/resource-link';

export default class UpcomingInvoice {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionId')) {
      this.setSubscriptionId(data['subscriptionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amountDue')) {
      this.setAmountDue(data['amountDue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subtotalAmount')) {
      this.setSubtotalAmount(data['subtotalAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discountAmount')) {
      this.setDiscountAmount(data['discountAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shipping')) {
      this.setShipping(data['shipping']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tax')) {
      this.setTax(data['tax']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'deliveryAddress')) {
      this.setDeliveryAddress(data['deliveryAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'poNumber')) {
      this.setPoNumber(data['poNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notes')) {
      this.setNotes(data['notes']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discounts')) {
      this.setDiscounts(data['discounts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dueTime')) {
      this.setDueTime(data['dueTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issuedTime')) {
      this.setIssuedTime(data['issuedTime']);
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

  get websiteId(): string | null {
    return this._fields['websiteId'] ?? null;
  }
  
  getWebsiteId(): string | null {
      return this._fields['websiteId'] ?? null;
  }

  setWebsiteId(value: null | string) {
    this._fields['websiteId'] = value;

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

  get currency(): string | null {
    return this._fields['currency'] ?? null;
  }
  
  getCurrency(): string | null {
      return this._fields['currency'] ?? null;
  }

  setCurrency(value: null | string) {
    this._fields['currency'] = value;

    return this;
  }

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

    return this;
  }

  get organizationId(): string | null {
    return this._fields['organizationId'] ?? null;
  }
  
  getOrganizationId(): string | null {
      return this._fields['organizationId'] ?? null;
  }

  setOrganizationId(value: null | string) {
    this._fields['organizationId'] = value;

    return this;
  }

  get items(): Array<any> | null {
    return this._fields['items'] ?? null;
  }
  
  getItems(): Array<any> | null {
      return this._fields['items'] ?? null;
  }

  setItems(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof UpcomingInvoiceItem ? value : new UpcomingInvoiceItem(value),
    ) : null;

    this._fields['items'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  private setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get amountDue(): number | null {
    return this._fields['amountDue'] ?? null;
  }
  
  getAmountDue(): number | null {
      return this._fields['amountDue'] ?? null;
  }

  private setAmountDue(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amountDue'] = value;

    return this;
  }

  get subtotalAmount(): number | null {
    return this._fields['subtotalAmount'] ?? null;
  }
  
  getSubtotalAmount(): number | null {
      return this._fields['subtotalAmount'] ?? null;
  }

  private setSubtotalAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['subtotalAmount'] = value;

    return this;
  }

  get discountAmount(): number | null {
    return this._fields['discountAmount'] ?? null;
  }
  
  getDiscountAmount(): number | null {
      return this._fields['discountAmount'] ?? null;
  }

  private setDiscountAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['discountAmount'] = value;

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

  get discounts(): Array<any> | null {
    return this._fields['discounts'] ?? null;
  }
  
  getDiscounts(): Array<any> | null {
      return this._fields['discounts'] ?? null;
  }

  private setDiscounts(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof UpcomingInvoiceDiscounts ? value : new UpcomingInvoiceDiscounts(value),
    ) : null;

    this._fields['discounts'] = value;

    return this;
  }

  get dueTime(): Date | null {
    return this._fields['dueTime'] ?? null;
  }
  
  getDueTime(): Date | null {
      return this._fields['dueTime'] ?? null;
  }

  setDueTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['dueTime'] = value;

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

  get embedded(): UpcomingInvoiceEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): UpcomingInvoiceEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | UpcomingInvoiceEmbedded | any) {
    if (value !== null && !(value instanceof UpcomingInvoiceEmbedded)) {
      value = new UpcomingInvoiceEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionId')) {
      data['subscriptionId'] = this['subscriptionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'] !== null
          ? this._fields['items'].map((upcomingInvoiceItem: UpcomingInvoiceItem) => upcomingInvoiceItem.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amountDue')) {
      data['amountDue'] = this['amountDue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subtotalAmount')) {
      data['subtotalAmount'] = this['subtotalAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discountAmount')) {
      data['discountAmount'] = this['discountAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shipping')) {
      data['shipping'] = this['shipping']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tax')) {
      data['tax'] = this['tax']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deliveryAddress')) {
      data['deliveryAddress'] = this['deliveryAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'poNumber')) {
      data['poNumber'] = this['poNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notes')) {
      data['notes'] = this['notes'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discounts')) {
      data['discounts'] = this['discounts'] !== null
          ? this._fields['discounts'].map((upcomingInvoiceDiscounts: UpcomingInvoiceDiscounts) => upcomingInvoiceDiscounts.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dueTime')) {
      data['dueTime'] = this['dueTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issuedTime')) {
      data['issuedTime'] = this['issuedTime']?.toISOString() ?? null;
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

import ShippingFactory from '../factories/shipping-factory';
import ContactObject from '../models/contact-object';
import { Shipping } from '../models/shipping';
import OrderPreviewItems from '../models/order-preview-items';
import OrderPreviewLineItems from '../models/order-preview-line-items';
import ShippingOption from '../models/shipping-option';
import OrderPreviewTaxes from '../models/order-preview-taxes';
import OrderPreviewDiscounts from '../models/order-preview-discounts';

export default class OrderPreview {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'deliveryAddress')) {
      this.setDeliveryAddress(data['deliveryAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'couponIds')) {
      this.setCouponIds(data['couponIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lineItems')) {
      this.setLineItems(data['lineItems']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shippingRates')) {
      this.setShippingRates(data['shippingRates']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxes')) {
      this.setTaxes(data['taxes']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discounts')) {
      this.setDiscounts(data['discounts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subtotalAmount')) {
      this.setSubtotalAmount(data['subtotalAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxAmount')) {
      this.setTaxAmount(data['taxAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shippingAmount')) {
      this.setShippingAmount(data['shippingAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discountsAmount')) {
      this.setDiscountsAmount(data['discountsAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'total')) {
      this.setTotal(data['total']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shipping')) {
      this.setShipping(data['shipping']);
    }
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

  get items(): Array<any> {
    return this._fields['items'];
  }
  
  getItems(): Array<any> {
      return this._fields['items'];
  }

  setItems(value: Array<any>) {
    value = value.map(
      (value) => value instanceof OrderPreviewItems ? value : new OrderPreviewItems(value),
    );

    this._fields['items'] = value;

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

  get lineItems(): Array<any> | null {
    return this._fields['lineItems'] ?? null;
  }
  
  getLineItems(): Array<any> | null {
      return this._fields['lineItems'] ?? null;
  }

  private setLineItems(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof OrderPreviewLineItems ? value : new OrderPreviewLineItems(value),
    ) : null;

    this._fields['lineItems'] = value;

    return this;
  }

  get shippingRates(): Array<any> | null {
    return this._fields['shippingRates'] ?? null;
  }
  
  getShippingRates(): Array<any> | null {
      return this._fields['shippingRates'] ?? null;
  }

  private setShippingRates(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ShippingOption ? value : new ShippingOption(value),
    ) : null;

    this._fields['shippingRates'] = value;

    return this;
  }

  get taxes(): Array<any> | null {
    return this._fields['taxes'] ?? null;
  }
  
  getTaxes(): Array<any> | null {
      return this._fields['taxes'] ?? null;
  }

  private setTaxes(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof OrderPreviewTaxes ? value : new OrderPreviewTaxes(value),
    ) : null;

    this._fields['taxes'] = value;

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
      (value) => value instanceof OrderPreviewDiscounts ? value : new OrderPreviewDiscounts(value),
    ) : null;

    this._fields['discounts'] = value;

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

  get taxAmount(): number | null {
    return this._fields['taxAmount'] ?? null;
  }
  
  getTaxAmount(): number | null {
      return this._fields['taxAmount'] ?? null;
  }

  private setTaxAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['taxAmount'] = value;

    return this;
  }

  get shippingAmount(): number | null {
    return this._fields['shippingAmount'] ?? null;
  }
  
  getShippingAmount(): number | null {
      return this._fields['shippingAmount'] ?? null;
  }

  private setShippingAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['shippingAmount'] = value;

    return this;
  }

  get discountsAmount(): number | null {
    return this._fields['discountsAmount'] ?? null;
  }
  
  getDiscountsAmount(): number | null {
      return this._fields['discountsAmount'] ?? null;
  }

  private setDiscountsAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['discountsAmount'] = value;

    return this;
  }

  get total(): number | null {
    return this._fields['total'] ?? null;
  }
  
  getTotal(): number | null {
      return this._fields['total'] ?? null;
  }

  private setTotal(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['total'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'].map(
          (orderPreviewItems: OrderPreviewItems) => orderPreviewItems.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deliveryAddress')) {
      data['deliveryAddress'] = this['deliveryAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'couponIds')) {
      data['couponIds'] = this['couponIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lineItems')) {
      data['lineItems'] = this['lineItems'] !== null
          ? this._fields['lineItems'].map((orderPreviewLineItems: OrderPreviewLineItems) => orderPreviewLineItems.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shippingRates')) {
      data['shippingRates'] = this['shippingRates'] !== null
          ? this._fields['shippingRates'].map((shippingOption: ShippingOption) => shippingOption.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxes')) {
      data['taxes'] = this['taxes'] !== null
          ? this._fields['taxes'].map((orderPreviewTaxes: OrderPreviewTaxes) => orderPreviewTaxes.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discounts')) {
      data['discounts'] = this['discounts'] !== null
          ? this._fields['discounts'].map((orderPreviewDiscounts: OrderPreviewDiscounts) => orderPreviewDiscounts.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subtotalAmount')) {
      data['subtotalAmount'] = this['subtotalAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxAmount')) {
      data['taxAmount'] = this['taxAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shippingAmount')) {
      data['shippingAmount'] = this['shippingAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discountsAmount')) {
      data['discountsAmount'] = this['discountsAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'total')) {
      data['total'] = this['total'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shipping')) {
      data['shipping'] = this['shipping']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

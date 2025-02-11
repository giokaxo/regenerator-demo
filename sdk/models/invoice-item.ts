import TaxItem from '../models/tax-item';
import InvoiceItemEmbedded from '../models/invoice-item-embedded';
import ResourceLink from '../models/resource-link';

export default class InvoiceItem {
  TYPE_DEBIT = 'debit';

  TYPE_CREDIT = 'credit';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unitPrice')) {
      this.setUnitPrice(data['unitPrice']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quantity')) {
      this.setQuantity(data['quantity']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'price')) {
      this.setPrice(data['price']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productId')) {
      this.setProductId(data['productId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'planId')) {
      this.setPlanId(data['planId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionId')) {
      this.setSubscriptionId(data['subscriptionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'discountAmount')) {
      this.setDiscountAmount(data['discountAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'periodStartTime')) {
      this.setPeriodStartTime(data['periodStartTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'periodEndTime')) {
      this.setPeriodEndTime(data['periodEndTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'periodNumber')) {
      this.setPeriodNumber(data['periodNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tax')) {
      this.setTax(data['tax']);
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

  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get unitPrice(): number {
    return this._fields['unitPrice'];
  }
  
  getUnitPrice(): number {
      return this._fields['unitPrice'];
  }

  setUnitPrice(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['unitPrice'] = value;

    return this;
  }

  get quantity(): number | null {
    return this._fields['quantity'] ?? null;
  }
  
  getQuantity(): number | null {
      return this._fields['quantity'] ?? null;
  }

  setQuantity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['quantity'] = value;

    return this;
  }

  get price(): number | null {
    return this._fields['price'] ?? null;
  }
  
  getPrice(): number | null {
      return this._fields['price'] ?? null;
  }

  private setPrice(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['price'] = value;

    return this;
  }

  get productId(): string | null {
    return this._fields['productId'] ?? null;
  }
  
  getProductId(): string | null {
      return this._fields['productId'] ?? null;
  }

  setProductId(value: null | string) {
    this._fields['productId'] = value;

    return this;
  }

  get planId(): string | null {
    return this._fields['planId'] ?? null;
  }
  
  getPlanId(): string | null {
      return this._fields['planId'] ?? null;
  }

  private setPlanId(value: null | string) {
    this._fields['planId'] = value;

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

  get periodStartTime(): Date | null {
    return this._fields['periodStartTime'] ?? null;
  }
  
  getPeriodStartTime(): Date | null {
      return this._fields['periodStartTime'] ?? null;
  }

  setPeriodStartTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['periodStartTime'] = value;

    return this;
  }

  get periodEndTime(): Date | null {
    return this._fields['periodEndTime'] ?? null;
  }
  
  getPeriodEndTime(): Date | null {
      return this._fields['periodEndTime'] ?? null;
  }

  setPeriodEndTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['periodEndTime'] = value;

    return this;
  }

  get periodNumber(): number | null {
    return this._fields['periodNumber'] ?? null;
  }
  
  getPeriodNumber(): number | null {
      return this._fields['periodNumber'] ?? null;
  }

  setPeriodNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['periodNumber'] = value;

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

  get tax(): TaxItem | null {
    return this._fields['tax'] ?? null;
  }
  
  getTax(): TaxItem | null {
      return this._fields['tax'] ?? null;
  }

  private setTax(value: null | TaxItem | any) {
    if (value !== null && !(value instanceof TaxItem)) {
      value = new TaxItem(value);
    }

    this._fields['tax'] = value;

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

  get embedded(): InvoiceItemEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): InvoiceItemEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | InvoiceItemEmbedded | any) {
    if (value !== null && !(value instanceof InvoiceItemEmbedded)) {
      value = new InvoiceItemEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unitPrice')) {
      data['unitPrice'] = this['unitPrice'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quantity')) {
      data['quantity'] = this['quantity'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'price')) {
      data['price'] = this['price'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productId')) {
      data['productId'] = this['productId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionId')) {
      data['subscriptionId'] = this['subscriptionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'discountAmount')) {
      data['discountAmount'] = this['discountAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periodStartTime')) {
      data['periodStartTime'] = this['periodStartTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periodEndTime')) {
      data['periodEndTime'] = this['periodEndTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'periodNumber')) {
      data['periodNumber'] = this['periodNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tax')) {
      data['tax'] = this['tax']?.jsonSerialize() ?? null;
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

import CreditMemoAllocations from '../models/credit-memo-allocations';
import CreditMemoItems from '../models/credit-memo-items';
import ResourceLink from '../models/resource-link';

export default class CreditMemo {
  STATUS_ISSUED = 'issued';

  STATUS_APPLIED = 'applied';

  STATUS_PARTIALLY_APPLIED = 'partially-applied';

  STATUS_VOIDED = 'voided';

  REASON_RETURN = 'return';

  REASON_PRODUCT_UNSATISFACTORY = 'product-unsatisfactory';

  REASON_ORDER_CHANGE = 'order-change';

  REASON_ORDER_CANCELLATION = 'order-cancellation';

  REASON_CHARGEBACK = 'chargeback';

  REASON_WRITE_OFF = 'write-off';

  REASON_WAIVER = 'waiver';

  REASON_CUSTOMER_CREDIT = 'customer-credit';

  REASON_OTHER = 'other';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'number')) {
      this.setNumber(data['number']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'allocations')) {
      this.setAllocations(data['allocations']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reason')) {
      this.setReason(data['reason']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'shippingAmount')) {
      this.setShippingAmount(data['shippingAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxAmount')) {
      this.setTaxAmount(data['taxAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'totalAmount')) {
      this.setTotalAmount(data['totalAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unusedAmount')) {
      this.setUnusedAmount(data['unusedAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'invoiceId')) {
      this.setInvoiceId(data['invoiceId']);
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

  get number(): number | null {
    return this._fields['number'] ?? null;
  }
  
  getNumber(): number | null {
      return this._fields['number'] ?? null;
  }

  private setNumber(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['number'] = value;

    return this;
  }

  get allocations(): CreditMemoAllocations | null {
    return this._fields['allocations'] ?? null;
  }
  
  getAllocations(): CreditMemoAllocations | null {
      return this._fields['allocations'] ?? null;
  }

  setAllocations(value: null | CreditMemoAllocations | any) {
    if (value !== null && !(value instanceof CreditMemoAllocations)) {
      value = new CreditMemoAllocations(value);
    }

    this._fields['allocations'] = value;

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
      (value) => value instanceof CreditMemoItems ? value : new CreditMemoItems(value),
    ) : null;

    this._fields['items'] = value;

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

  get reason(): string | null {
    return this._fields['reason'] ?? null;
  }
  
  getReason(): string | null {
      return this._fields['reason'] ?? null;
  }

  setReason(value: null | string) {
    this._fields['reason'] = value;

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

  get shippingAmount(): number | null {
    return this._fields['shippingAmount'] ?? null;
  }
  
  getShippingAmount(): number | null {
      return this._fields['shippingAmount'] ?? null;
  }

  setShippingAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['shippingAmount'] = value;

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

  get totalAmount(): number | null {
    return this._fields['totalAmount'] ?? null;
  }
  
  getTotalAmount(): number | null {
      return this._fields['totalAmount'] ?? null;
  }

  private setTotalAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['totalAmount'] = value;

    return this;
  }

  get unusedAmount(): number | null {
    return this._fields['unusedAmount'] ?? null;
  }
  
  getUnusedAmount(): number | null {
      return this._fields['unusedAmount'] ?? null;
  }

  private setUnusedAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['unusedAmount'] = value;

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

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  private setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
  }

  get currency(): string {
    return this._fields['currency'];
  }
  
  getCurrency(): string {
      return this._fields['currency'];
  }

  private setCurrency(value: string) {
    this._fields['currency'] = value;

    return this;
  }

  get invoiceId(): string | null {
    return this._fields['invoiceId'] ?? null;
  }
  
  getInvoiceId(): string | null {
      return this._fields['invoiceId'] ?? null;
  }

  setInvoiceId(value: null | string) {
    this._fields['invoiceId'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'number')) {
      data['number'] = this['number'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allocations')) {
      data['allocations'] = this['allocations']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'] !== null
          ? this._fields['items'].map((creditMemoItems: CreditMemoItems) => creditMemoItems.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reason')) {
      data['reason'] = this['reason'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shippingAmount')) {
      data['shippingAmount'] = this['shippingAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxAmount')) {
      data['taxAmount'] = this['taxAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'totalAmount')) {
      data['totalAmount'] = this['totalAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unusedAmount')) {
      data['unusedAmount'] = this['unusedAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'invoiceId')) {
      data['invoiceId'] = this['invoiceId'];
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

    return data;
  }
}

import PatchCreditMemoAllocations from '../models/patch-credit-memo-allocations';
import PatchCreditMemoItems from '../models/patch-credit-memo-items';

export default class PatchCreditMemo {
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
    if (Object.prototype.hasOwnProperty.call(data, 'allocations')) {
      this.setAllocations(data['allocations']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
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
  }


  get allocations(): PatchCreditMemoAllocations | null {
    return this._fields['allocations'] ?? null;
  }
  
  getAllocations(): PatchCreditMemoAllocations | null {
      return this._fields['allocations'] ?? null;
  }

  setAllocations(value: null | PatchCreditMemoAllocations | any) {
    if (value !== null && !(value instanceof PatchCreditMemoAllocations)) {
      value = new PatchCreditMemoAllocations(value);
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
      (value) => value instanceof PatchCreditMemoItems ? value : new PatchCreditMemoItems(value),
    ) : null;

    this._fields['items'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'allocations')) {
      data['allocations'] = this['allocations']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'] !== null
          ? this._fields['items'].map((patchCreditMemoItems: PatchCreditMemoItems) => patchCreditMemoItems.jsonSerialize())
          : null;
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

    return data;
  }
}

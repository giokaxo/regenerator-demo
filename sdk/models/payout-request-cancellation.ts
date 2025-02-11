
export default class PayoutRequestCancellation {
  CANCELED_BY_MERCHANT = 'merchant';

  CANCELED_BY_CUSTOMER = 'customer';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'canceledBy')) {
      this.setCanceledBy(data['canceledBy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
  }


  get canceledBy(): string | null {
    return this._fields['canceledBy'] ?? null;
  }
  
  getCanceledBy(): string | null {
      return this._fields['canceledBy'] ?? null;
  }

  setCanceledBy(value: null | string) {
    this._fields['canceledBy'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'canceledBy')) {
      data['canceledBy'] = this['canceledBy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }

    return data;
  }
}

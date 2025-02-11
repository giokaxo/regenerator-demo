
export default class QuoteCreateOrderAcceptanceFulfillment {
  CONDITION_CUSTOMER = 'customer';

  CONDITION_PAYMENT = 'payment';

  CONDITION_ORGANIZATION = 'organization';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'condition')) {
      this.setCondition(data['condition']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isFulfilled')) {
      this.setIsFulfilled(data['isFulfilled']);
    }
  }


  get condition(): string | null {
    return this._fields['condition'] ?? null;
  }
  
  getCondition(): string | null {
      return this._fields['condition'] ?? null;
  }

  setCondition(value: null | string) {
    this._fields['condition'] = value;

    return this;
  }

  get isFulfilled(): boolean | null {
    return this._fields['isFulfilled'] ?? null;
  }
  
  getIsFulfilled(): boolean | null {
      return this._fields['isFulfilled'] ?? null;
  }

  setIsFulfilled(value: null | boolean) {
    this._fields['isFulfilled'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'condition')) {
      data['condition'] = this['condition'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isFulfilled')) {
      data['isFulfilled'] = this['isFulfilled'];
    }

    return data;
  }
}

import Money from '../models/money';

export default class TransactionDcc {
  OUTCOME_REJECTED = 'rejected';

  OUTCOME_SELECTED = 'selected';

  OUTCOME_UNKNOWN = 'unknown';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'base')) {
      this.setBase(data['base']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'quote')) {
      this.setQuote(data['quote']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'usdMarkup')) {
      this.setUsdMarkup(data['usdMarkup']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'outcome')) {
      this.setOutcome(data['outcome']);
    }
  }


  get base(): Money | null {
    return this._fields['base'] ?? null;
  }
  
  getBase(): Money | null {
      return this._fields['base'] ?? null;
  }

  setBase(value: null | Money | any) {
    if (value !== null && !(value instanceof Money)) {
      value = new Money(value);
    }

    this._fields['base'] = value;

    return this;
  }

  get quote(): Money | null {
    return this._fields['quote'] ?? null;
  }
  
  getQuote(): Money | null {
      return this._fields['quote'] ?? null;
  }

  setQuote(value: null | Money | any) {
    if (value !== null && !(value instanceof Money)) {
      value = new Money(value);
    }

    this._fields['quote'] = value;

    return this;
  }

  get usdMarkup(): number | null {
    return this._fields['usdMarkup'] ?? null;
  }
  
  getUsdMarkup(): number | null {
      return this._fields['usdMarkup'] ?? null;
  }

  setUsdMarkup(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['usdMarkup'] = value;

    return this;
  }

  get outcome(): string | null {
    return this._fields['outcome'] ?? null;
  }
  
  getOutcome(): string | null {
      return this._fields['outcome'] ?? null;
  }

  setOutcome(value: null | string) {
    this._fields['outcome'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'base')) {
      data['base'] = this['base']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'quote')) {
      data['quote'] = this['quote']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'usdMarkup')) {
      data['usdMarkup'] = this['usdMarkup'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'outcome')) {
      data['outcome'] = this['outcome'];
    }

    return data;
  }
}

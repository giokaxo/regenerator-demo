
export default class KhelocardCardTokenPaymentInstrument {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'number')) {
      this.setNumber(data['number']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cvv')) {
      this.setCvv(data['cvv']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'last4')) {
      this.setLast4(data['last4']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expMonth')) {
      this.setExpMonth(data['expMonth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expYear')) {
      this.setExpYear(data['expYear']);
    }
  }


  get number(): string {
    return this._fields['number'];
  }
  
  getNumber(): string {
      return this._fields['number'];
  }

  setNumber(value: string) {
    this._fields['number'] = value;

    return this;
  }

  get cvv(): string {
    return this._fields['cvv'];
  }
  
  getCvv(): string {
      return this._fields['cvv'];
  }

  setCvv(value: string) {
    this._fields['cvv'] = value;

    return this;
  }

  get last4(): string | null {
    return this._fields['last4'] ?? null;
  }
  
  getLast4(): string | null {
      return this._fields['last4'] ?? null;
  }

  private setLast4(value: null | string) {
    this._fields['last4'] = value;

    return this;
  }

  get expMonth(): number {
    return this._fields['expMonth'];
  }
  
  getExpMonth(): number {
      return this._fields['expMonth'];
  }

  setExpMonth(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expMonth'] = value;

    return this;
  }

  get expYear(): number {
    return this._fields['expYear'];
  }
  
  getExpYear(): number {
      return this._fields['expYear'];
  }

  setExpYear(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expYear'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'number')) {
      data['number'] = this['number'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cvv')) {
      data['cvv'] = this['cvv'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'last4')) {
      data['last4'] = this['last4'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expMonth')) {
      data['expMonth'] = this['expMonth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expYear')) {
      data['expYear'] = this['expYear'];
    }

    return data;
  }
}

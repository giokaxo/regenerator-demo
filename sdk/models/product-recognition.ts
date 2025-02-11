
export default class ProductRecognition {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'debitAccountId')) {
      this.setDebitAccountId(data['debitAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'creditAccountId')) {
      this.setCreditAccountId(data['creditAccountId']);
    }
  }


  get debitAccountId(): string | null {
    return this._fields['debitAccountId'] ?? null;
  }
  
  getDebitAccountId(): string | null {
      return this._fields['debitAccountId'] ?? null;
  }

  setDebitAccountId(value: null | string) {
    this._fields['debitAccountId'] = value;

    return this;
  }

  get creditAccountId(): string | null {
    return this._fields['creditAccountId'] ?? null;
  }
  
  getCreditAccountId(): string | null {
      return this._fields['creditAccountId'] ?? null;
  }

  setCreditAccountId(value: null | string) {
    this._fields['creditAccountId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'debitAccountId')) {
      data['debitAccountId'] = this['debitAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'creditAccountId')) {
      data['creditAccountId'] = this['creditAccountId'];
    }

    return data;
  }
}


export default class TelrSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'transactionDescription')) {
      this.setTransactionDescription(data['transactionDescription']);
    }
  }


  get transactionDescription(): string | null {
    return this._fields['transactionDescription'] ?? null;
  }
  
  getTransactionDescription(): string | null {
      return this._fields['transactionDescription'] ?? null;
  }

  setTransactionDescription(value: null | string) {
    this._fields['transactionDescription'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionDescription')) {
      data['transactionDescription'] = this['transactionDescription'];
    }

    return data;
  }
}

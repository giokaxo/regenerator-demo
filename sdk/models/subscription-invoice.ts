
export default class SubscriptionInvoice {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'transactionId')) {
      this.setTransactionId(data['transactionId']);
    }
  }


  get transactionId(): string | null {
    return this._fields['transactionId'] ?? null;
  }
  
  getTransactionId(): string | null {
      return this._fields['transactionId'] ?? null;
  }

  setTransactionId(value: null | string) {
    this._fields['transactionId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionId')) {
      data['transactionId'] = this['transactionId'];
    }

    return data;
  }
}

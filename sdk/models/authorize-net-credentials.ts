
export default class AuthorizeNetCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiLoginId')) {
      this.setApiLoginId(data['apiLoginId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactionKey')) {
      this.setTransactionKey(data['transactionKey']);
    }
  }


  get apiLoginId(): string {
    return this._fields['apiLoginId'];
  }
  
  getApiLoginId(): string {
      return this._fields['apiLoginId'];
  }

  setApiLoginId(value: string) {
    this._fields['apiLoginId'] = value;

    return this;
  }

  get transactionKey(): string {
    return this._fields['transactionKey'];
  }
  
  getTransactionKey(): string {
      return this._fields['transactionKey'];
  }

  setTransactionKey(value: string) {
    this._fields['transactionKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiLoginId')) {
      data['apiLoginId'] = this['apiLoginId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionKey')) {
      data['transactionKey'] = this['transactionKey'];
    }

    return data;
  }
}

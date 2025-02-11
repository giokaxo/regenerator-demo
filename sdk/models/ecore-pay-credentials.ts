
export default class EcorePayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountId')) {
      this.setAccountId(data['accountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountAuth')) {
      this.setAccountAuth(data['accountAuth']);
    }
  }


  get accountId(): string {
    return this._fields['accountId'];
  }
  
  getAccountId(): string {
      return this._fields['accountId'];
  }

  setAccountId(value: string) {
    this._fields['accountId'] = value;

    return this;
  }

  get accountAuth(): string {
    return this._fields['accountAuth'];
  }
  
  getAccountAuth(): string {
      return this._fields['accountAuth'];
  }

  setAccountAuth(value: string) {
    this._fields['accountAuth'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountId')) {
      data['accountId'] = this['accountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountAuth')) {
      data['accountAuth'] = this['accountAuth'];
    }

    return data;
  }
}

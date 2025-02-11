
export default class GETCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountId')) {
      this.setAccountId(data['accountId']);
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountId')) {
      data['accountId'] = this['accountId'];
    }

    return data;
  }
}

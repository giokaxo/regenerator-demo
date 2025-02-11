
export default class PlaidAccountTokenPaymentInstrument {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'linkToken')) {
      this.setLinkToken(data['linkToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'publicToken')) {
      this.setPublicToken(data['publicToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountId')) {
      this.setAccountId(data['accountId']);
    }
  }


  get linkToken(): string {
    return this._fields['linkToken'];
  }
  
  getLinkToken(): string {
      return this._fields['linkToken'];
  }

  setLinkToken(value: string) {
    this._fields['linkToken'] = value;

    return this;
  }

  get publicToken(): string {
    return this._fields['publicToken'];
  }
  
  getPublicToken(): string {
      return this._fields['publicToken'];
  }

  setPublicToken(value: string) {
    this._fields['publicToken'] = value;

    return this;
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'linkToken')) {
      data['linkToken'] = this['linkToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicToken')) {
      data['publicToken'] = this['publicToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountId')) {
      data['accountId'] = this['accountId'];
    }

    return data;
  }
}

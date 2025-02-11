
export default class PayCashCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'emisor')) {
      this.setEmisor(data['emisor']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
  }


  get emisor(): string {
    return this._fields['emisor'];
  }
  
  getEmisor(): string {
      return this._fields['emisor'];
  }

  setEmisor(value: string) {
    this._fields['emisor'] = value;

    return this;
  }

  get token(): string {
    return this._fields['token'];
  }
  
  getToken(): string {
      return this._fields['token'];
  }

  setToken(value: string) {
    this._fields['token'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'emisor')) {
      data['emisor'] = this['emisor'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }

    return data;
  }
}


export default class CoinGateCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'authToken')) {
      this.setAuthToken(data['authToken']);
    }
  }


  get authToken(): string {
    return this._fields['authToken'];
  }
  
  getAuthToken(): string {
      return this._fields['authToken'];
  }

  setAuthToken(value: string) {
    this._fields['authToken'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authToken')) {
      data['authToken'] = this['authToken'];
    }

    return data;
  }
}

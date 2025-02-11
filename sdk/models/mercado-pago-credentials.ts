
export default class MercadoPagoCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'publicKey')) {
      this.setPublicKey(data['publicKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accessToken')) {
      this.setAccessToken(data['accessToken']);
    }
  }


  get publicKey(): string {
    return this._fields['publicKey'];
  }
  
  getPublicKey(): string {
      return this._fields['publicKey'];
  }

  setPublicKey(value: string) {
    this._fields['publicKey'] = value;

    return this;
  }

  get accessToken(): string {
    return this._fields['accessToken'];
  }
  
  getAccessToken(): string {
      return this._fields['accessToken'];
  }

  setAccessToken(value: string) {
    this._fields['accessToken'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicKey')) {
      data['publicKey'] = this['publicKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accessToken')) {
      data['accessToken'] = this['accessToken'];
    }

    return data;
  }
}

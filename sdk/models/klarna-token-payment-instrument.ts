
export default class KlarnaTokenPaymentInstrument {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'klarnaAuthorizationToken')) {
      this.setKlarnaAuthorizationToken(data['klarnaAuthorizationToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'klarnaSessionId')) {
      this.setKlarnaSessionId(data['klarnaSessionId']);
    }
  }


  get klarnaAuthorizationToken(): string {
    return this._fields['klarnaAuthorizationToken'];
  }
  
  getKlarnaAuthorizationToken(): string {
      return this._fields['klarnaAuthorizationToken'];
  }

  setKlarnaAuthorizationToken(value: string) {
    this._fields['klarnaAuthorizationToken'] = value;

    return this;
  }

  get klarnaSessionId(): string {
    return this._fields['klarnaSessionId'];
  }
  
  getKlarnaSessionId(): string {
      return this._fields['klarnaSessionId'];
  }

  setKlarnaSessionId(value: string) {
    this._fields['klarnaSessionId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'klarnaAuthorizationToken')) {
      data['klarnaAuthorizationToken'] = this['klarnaAuthorizationToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'klarnaSessionId')) {
      data['klarnaSessionId'] = this['klarnaSessionId'];
    }

    return data;
  }
}

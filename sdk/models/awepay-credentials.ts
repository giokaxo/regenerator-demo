
export default class AwepayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'sid')) {
      this.setSid(data['sid']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rcode')) {
      this.setRcode(data['rcode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
  }


  get sid(): string {
    return this._fields['sid'];
  }
  
  getSid(): string {
      return this._fields['sid'];
  }

  setSid(value: string) {
    this._fields['sid'] = value;

    return this;
  }

  get rcode(): string {
    return this._fields['rcode'];
  }
  
  getRcode(): string {
      return this._fields['rcode'];
  }

  setRcode(value: string) {
    this._fields['rcode'] = value;

    return this;
  }

  get secretKey(): string | null {
    return this._fields['secretKey'] ?? null;
  }
  
  getSecretKey(): string | null {
      return this._fields['secretKey'] ?? null;
  }

  setSecretKey(value: null | string) {
    this._fields['secretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sid')) {
      data['sid'] = this['sid'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rcode')) {
      data['rcode'] = this['rcode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }

    return data;
  }
}

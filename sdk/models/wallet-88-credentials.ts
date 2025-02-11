
export default class Wallet88Credentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'sid')) {
      this.setSid(data['sid']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rcode')) {
      this.setRcode(data['rcode']);
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sid')) {
      data['sid'] = this['sid'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rcode')) {
      data['rcode'] = this['rcode'];
    }

    return data;
  }
}

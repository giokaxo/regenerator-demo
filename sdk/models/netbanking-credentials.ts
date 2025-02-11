
export default class NetbankingCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'midcode')) {
      this.setMidcode(data['midcode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'midsecret')) {
      this.setMidsecret(data['midsecret']);
    }
  }


  get midcode(): string {
    return this._fields['midcode'];
  }
  
  getMidcode(): string {
      return this._fields['midcode'];
  }

  setMidcode(value: string) {
    this._fields['midcode'] = value;

    return this;
  }

  get midsecret(): string {
    return this._fields['midsecret'];
  }
  
  getMidsecret(): string {
      return this._fields['midsecret'];
  }

  setMidsecret(value: string) {
    this._fields['midsecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'midcode')) {
      data['midcode'] = this['midcode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'midsecret')) {
      data['midsecret'] = this['midsecret'];
    }

    return data;
  }
}

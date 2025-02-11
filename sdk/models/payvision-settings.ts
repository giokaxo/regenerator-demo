
export default class PayvisionSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'avs')) {
      this.setAvs(data['avs']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'delay')) {
      this.setDelay(data['delay']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAccountType')) {
      this.setMerchantAccountType(data['merchantAccountType']);
    }
  }


  get avs(): boolean | null {
    return this._fields['avs'] ?? null;
  }
  
  getAvs(): boolean | null {
      return this._fields['avs'] ?? null;
  }

  setAvs(value: null | boolean) {
    this._fields['avs'] = value;

    return this;
  }

  get delay(): number | null {
    return this._fields['delay'] ?? null;
  }
  
  getDelay(): number | null {
      return this._fields['delay'] ?? null;
  }

  setDelay(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['delay'] = value;

    return this;
  }

  get merchantAccountType(): number {
    return this._fields['merchantAccountType'];
  }
  
  getMerchantAccountType(): number {
      return this._fields['merchantAccountType'];
  }

  setMerchantAccountType(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['merchantAccountType'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'avs')) {
      data['avs'] = this['avs'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'delay')) {
      data['delay'] = this['delay'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAccountType')) {
      data['merchantAccountType'] = this['merchantAccountType'];
    }

    return data;
  }
}

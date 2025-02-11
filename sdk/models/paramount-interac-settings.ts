
export default class ParamountInteracSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'sandbox')) {
      this.setSandbox(data['sandbox']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantSubId')) {
      this.setMerchantSubId(data['merchantSubId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'autodepositLookup')) {
      this.setAutodepositLookup(data['autodepositLookup']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'autodepositLookupDay')) {
      this.setAutodepositLookupDay(data['autodepositLookupDay']);
    }
  }


  get sandbox(): boolean | null {
    return this._fields['sandbox'] ?? null;
  }
  
  getSandbox(): boolean | null {
      return this._fields['sandbox'] ?? null;
  }

  setSandbox(value: null | boolean) {
    this._fields['sandbox'] = value;

    return this;
  }

  get merchantSubId(): number | null {
    return this._fields['merchantSubId'] ?? null;
  }
  
  getMerchantSubId(): number | null {
      return this._fields['merchantSubId'] ?? null;
  }

  setMerchantSubId(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['merchantSubId'] = value;

    return this;
  }

  get autodepositLookup(): boolean | null {
    return this._fields['autodepositLookup'] ?? null;
  }
  
  getAutodepositLookup(): boolean | null {
      return this._fields['autodepositLookup'] ?? null;
  }

  setAutodepositLookup(value: null | boolean) {
    this._fields['autodepositLookup'] = value;

    return this;
  }

  get autodepositLookupDay(): number | null {
    return this._fields['autodepositLookupDay'] ?? null;
  }
  
  getAutodepositLookupDay(): number | null {
      return this._fields['autodepositLookupDay'] ?? null;
  }

  setAutodepositLookupDay(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['autodepositLookupDay'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sandbox')) {
      data['sandbox'] = this['sandbox'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantSubId')) {
      data['merchantSubId'] = this['merchantSubId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'autodepositLookup')) {
      data['autodepositLookup'] = this['autodepositLookup'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'autodepositLookupDay')) {
      data['autodepositLookupDay'] = this['autodepositLookupDay'];
    }

    return data;
  }
}

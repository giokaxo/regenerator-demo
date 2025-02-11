
export default class PayperSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'autodepositLookup')) {
      this.setAutodepositLookup(data['autodepositLookup']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'autodepositLookupInterval')) {
      this.setAutodepositLookupInterval(data['autodepositLookupInterval']);
    }
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

  get autodepositLookupInterval(): number | null {
    return this._fields['autodepositLookupInterval'] ?? null;
  }
  
  getAutodepositLookupInterval(): number | null {
      return this._fields['autodepositLookupInterval'] ?? null;
  }

  setAutodepositLookupInterval(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['autodepositLookupInterval'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'autodepositLookup')) {
      data['autodepositLookup'] = this['autodepositLookup'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'autodepositLookupInterval')) {
      data['autodepositLookupInterval'] = this['autodepositLookupInterval'];
    }

    return data;
  }
}

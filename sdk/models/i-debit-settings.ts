
export default class IDebitSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantSubId')) {
      this.setMerchantSubId(data['merchantSubId']);
    }
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantSubId')) {
      data['merchantSubId'] = this['merchantSubId'];
    }

    return data;
  }
}

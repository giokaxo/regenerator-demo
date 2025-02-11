
export default class VCreditosSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantWebsiteLoginLabel')) {
      this.setMerchantWebsiteLoginLabel(data['merchantWebsiteLoginLabel']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantWebsiteLoginDescription')) {
      this.setMerchantWebsiteLoginDescription(data['merchantWebsiteLoginDescription']);
    }
  }


  get merchantWebsiteLoginLabel(): string | null {
    return this._fields['merchantWebsiteLoginLabel'] ?? null;
  }
  
  getMerchantWebsiteLoginLabel(): string | null {
      return this._fields['merchantWebsiteLoginLabel'] ?? null;
  }

  setMerchantWebsiteLoginLabel(value: null | string) {
    this._fields['merchantWebsiteLoginLabel'] = value;

    return this;
  }

  get merchantWebsiteLoginDescription(): string | null {
    return this._fields['merchantWebsiteLoginDescription'] ?? null;
  }
  
  getMerchantWebsiteLoginDescription(): string | null {
      return this._fields['merchantWebsiteLoginDescription'] ?? null;
  }

  setMerchantWebsiteLoginDescription(value: null | string) {
    this._fields['merchantWebsiteLoginDescription'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantWebsiteLoginLabel')) {
      data['merchantWebsiteLoginLabel'] = this['merchantWebsiteLoginLabel'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantWebsiteLoginDescription')) {
      data['merchantWebsiteLoginDescription'] = this['merchantWebsiteLoginDescription'];
    }

    return data;
  }
}

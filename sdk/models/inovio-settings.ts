
export default class InovioSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAccountId')) {
      this.setMerchantAccountId(data['merchantAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productId')) {
      this.setProductId(data['productId']);
    }
  }


  get websiteId(): string {
    return this._fields['websiteId'];
  }
  
  getWebsiteId(): string {
      return this._fields['websiteId'];
  }

  setWebsiteId(value: string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get merchantAccountId(): string {
    return this._fields['merchantAccountId'];
  }
  
  getMerchantAccountId(): string {
      return this._fields['merchantAccountId'];
  }

  setMerchantAccountId(value: string) {
    this._fields['merchantAccountId'] = value;

    return this;
  }

  get productId(): string {
    return this._fields['productId'];
  }
  
  getProductId(): string {
      return this._fields['productId'];
  }

  setProductId(value: string) {
    this._fields['productId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAccountId')) {
      data['merchantAccountId'] = this['merchantAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productId')) {
      data['productId'] = this['productId'];
    }

    return data;
  }
}


export default class KonnektiveSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'campaignId')) {
      this.setCampaignId(data['campaignId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productId')) {
      this.setProductId(data['productId']);
    }
  }


  get campaignId(): string {
    return this._fields['campaignId'];
  }
  
  getCampaignId(): string {
      return this._fields['campaignId'];
  }

  setCampaignId(value: string) {
    this._fields['campaignId'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'campaignId')) {
      data['campaignId'] = this['campaignId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productId')) {
      data['productId'] = this['productId'];
    }

    return data;
  }
}

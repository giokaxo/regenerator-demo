
export default class PiastrixCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'shopId')) {
      this.setShopId(data['shopId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
  }


  get shopId(): string {
    return this._fields['shopId'];
  }
  
  getShopId(): string {
      return this._fields['shopId'];
  }

  setShopId(value: string) {
    this._fields['shopId'] = value;

    return this;
  }

  get secretKey(): string {
    return this._fields['secretKey'];
  }
  
  getSecretKey(): string {
      return this._fields['secretKey'];
  }

  setSecretKey(value: string) {
    this._fields['secretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'shopId')) {
      data['shopId'] = this['shopId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }

    return data;
  }
}

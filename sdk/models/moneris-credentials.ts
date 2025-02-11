
export default class MonerisCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiToken')) {
      this.setApiToken(data['apiToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'storeId')) {
      this.setStoreId(data['storeId']);
    }
  }


  get apiToken(): string {
    return this._fields['apiToken'];
  }
  
  getApiToken(): string {
      return this._fields['apiToken'];
  }

  setApiToken(value: string) {
    this._fields['apiToken'] = value;

    return this;
  }

  get storeId(): string {
    return this._fields['storeId'];
  }
  
  getStoreId(): string {
      return this._fields['storeId'];
  }

  setStoreId(value: string) {
    this._fields['storeId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiToken')) {
      data['apiToken'] = this['apiToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeId')) {
      data['storeId'] = this['storeId'];
    }

    return data;
  }
}

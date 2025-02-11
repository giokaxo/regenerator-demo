
export default class PaysafeCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'storeId')) {
      this.setStoreId(data['storeId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'storePwd')) {
      this.setStorePwd(data['storePwd']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountNum')) {
      this.setAccountNum(data['accountNum']);
    }
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

  get storePwd(): string {
    return this._fields['storePwd'];
  }
  
  getStorePwd(): string {
      return this._fields['storePwd'];
  }

  setStorePwd(value: string) {
    this._fields['storePwd'] = value;

    return this;
  }

  get accountNum(): string {
    return this._fields['accountNum'];
  }
  
  getAccountNum(): string {
      return this._fields['accountNum'];
  }

  setAccountNum(value: string) {
    this._fields['accountNum'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeId')) {
      data['storeId'] = this['storeId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storePwd')) {
      data['storePwd'] = this['storePwd'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountNum')) {
      data['accountNum'] = this['accountNum'];
    }

    return data;
  }
}

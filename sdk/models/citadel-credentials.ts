
export default class CitadelCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'storeName')) {
      this.setStoreName(data['storeName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'storeId')) {
      this.setStoreId(data['storeId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
  }


  get storeName(): string {
    return this._fields['storeName'];
  }
  
  getStoreName(): string {
      return this._fields['storeName'];
  }

  setStoreName(value: string) {
    this._fields['storeName'] = value;

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

  get username(): string {
    return this._fields['username'];
  }
  
  getUsername(): string {
      return this._fields['username'];
  }

  setUsername(value: string) {
    this._fields['username'] = value;

    return this;
  }

  get password(): string {
    return this._fields['password'];
  }
  
  getPassword(): string {
      return this._fields['password'];
  }

  setPassword(value: string) {
    this._fields['password'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeName')) {
      data['storeName'] = this['storeName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeId')) {
      data['storeId'] = this['storeId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'username')) {
      data['username'] = this['username'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }

    return data;
  }
}

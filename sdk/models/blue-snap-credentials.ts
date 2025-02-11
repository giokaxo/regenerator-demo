
export default class BlueSnapCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dataProtectionKey')) {
      this.setDataProtectionKey(data['dataProtectionKey']);
    }
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

  get merchantId(): string | null {
    return this._fields['merchantId'] ?? null;
  }
  
  getMerchantId(): string | null {
      return this._fields['merchantId'] ?? null;
  }

  setMerchantId(value: null | string) {
    this._fields['merchantId'] = value;

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

  get dataProtectionKey(): string | null {
    return this._fields['dataProtectionKey'] ?? null;
  }
  
  getDataProtectionKey(): string | null {
      return this._fields['dataProtectionKey'] ?? null;
  }

  setDataProtectionKey(value: null | string) {
    this._fields['dataProtectionKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'username')) {
      data['username'] = this['username'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dataProtectionKey')) {
      data['dataProtectionKey'] = this['dataProtectionKey'];
    }

    return data;
  }
}

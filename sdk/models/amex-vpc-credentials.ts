
export default class AmexVPCCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accessCode')) {
      this.setAccessCode(data['accessCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'user')) {
      this.setUser(data['user']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
  }


  get merchantId(): string {
    return this._fields['merchantId'];
  }
  
  getMerchantId(): string {
      return this._fields['merchantId'];
  }

  setMerchantId(value: string) {
    this._fields['merchantId'] = value;

    return this;
  }

  get accessCode(): string {
    return this._fields['accessCode'];
  }
  
  getAccessCode(): string {
      return this._fields['accessCode'];
  }

  setAccessCode(value: string) {
    this._fields['accessCode'] = value;

    return this;
  }

  get user(): string {
    return this._fields['user'];
  }
  
  getUser(): string {
      return this._fields['user'];
  }

  setUser(value: string) {
    this._fields['user'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accessCode')) {
      data['accessCode'] = this['accessCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'user')) {
      data['user'] = this['user'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }

    return data;
  }
}

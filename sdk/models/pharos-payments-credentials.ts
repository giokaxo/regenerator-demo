
export default class PharosPaymentsCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantCode')) {
      this.setMerchantCode(data['merchantCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'terminalCode')) {
      this.setTerminalCode(data['terminalCode']);
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

  get merchantCode(): string {
    return this._fields['merchantCode'];
  }
  
  getMerchantCode(): string {
      return this._fields['merchantCode'];
  }

  setMerchantCode(value: string) {
    this._fields['merchantCode'] = value;

    return this;
  }

  get terminalCode(): string {
    return this._fields['terminalCode'];
  }
  
  getTerminalCode(): string {
      return this._fields['terminalCode'];
  }

  setTerminalCode(value: string) {
    this._fields['terminalCode'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'username')) {
      data['username'] = this['username'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantCode')) {
      data['merchantCode'] = this['merchantCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'terminalCode')) {
      data['terminalCode'] = this['terminalCode'];
    }

    return data;
  }
}

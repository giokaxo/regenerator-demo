
export default class EzeebillCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accessId')) {
      this.setAccessId(data['accessId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'terminalId')) {
      this.setTerminalId(data['terminalId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'operatorId')) {
      this.setOperatorId(data['operatorId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hashKey')) {
      this.setHashKey(data['hashKey']);
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

  get accessId(): string {
    return this._fields['accessId'];
  }
  
  getAccessId(): string {
      return this._fields['accessId'];
  }

  setAccessId(value: string) {
    this._fields['accessId'] = value;

    return this;
  }

  get terminalId(): string {
    return this._fields['terminalId'];
  }
  
  getTerminalId(): string {
      return this._fields['terminalId'];
  }

  setTerminalId(value: string) {
    this._fields['terminalId'] = value;

    return this;
  }

  get operatorId(): string {
    return this._fields['operatorId'];
  }
  
  getOperatorId(): string {
      return this._fields['operatorId'];
  }

  setOperatorId(value: string) {
    this._fields['operatorId'] = value;

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

  get hashKey(): string {
    return this._fields['hashKey'];
  }
  
  getHashKey(): string {
      return this._fields['hashKey'];
  }

  setHashKey(value: string) {
    this._fields['hashKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accessId')) {
      data['accessId'] = this['accessId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'terminalId')) {
      data['terminalId'] = this['terminalId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'operatorId')) {
      data['operatorId'] = this['operatorId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hashKey')) {
      data['hashKey'] = this['hashKey'];
    }

    return data;
  }
}

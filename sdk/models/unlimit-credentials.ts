
export default class UnlimitCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'terminalId')) {
      this.setTerminalId(data['terminalId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ipnSecret')) {
      this.setIpnSecret(data['ipnSecret']);
    }
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

  get ipnSecret(): string {
    return this._fields['ipnSecret'];
  }
  
  getIpnSecret(): string {
      return this._fields['ipnSecret'];
  }

  setIpnSecret(value: string) {
    this._fields['ipnSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'terminalId')) {
      data['terminalId'] = this['terminalId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipnSecret')) {
      data['ipnSecret'] = this['ipnSecret'];
    }

    return data;
  }
}

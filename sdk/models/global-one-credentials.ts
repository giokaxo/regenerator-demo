
export default class GlobalOneCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'terminalId')) {
      this.setTerminalId(data['terminalId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sharedSecret')) {
      this.setSharedSecret(data['sharedSecret']);
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

  get sharedSecret(): string {
    return this._fields['sharedSecret'];
  }
  
  getSharedSecret(): string {
      return this._fields['sharedSecret'];
  }

  setSharedSecret(value: string) {
    this._fields['sharedSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'terminalId')) {
      data['terminalId'] = this['terminalId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sharedSecret')) {
      data['sharedSecret'] = this['sharedSecret'];
    }

    return data;
  }
}

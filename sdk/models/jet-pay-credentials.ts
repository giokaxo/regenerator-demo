
export default class JetPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'TerminalID')) {
      this.setTerminalID(data['TerminalID']);
    }
  }


  get terminalID(): string {
    return this._fields['TerminalID'];
  }
  
  getTerminalID(): string {
      return this._fields['TerminalID'];
  }

  setTerminalID(value: string) {
    this._fields['TerminalID'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'terminalID')) {
      data['TerminalID'] = this['terminalID'];
    }

    return data;
  }
}

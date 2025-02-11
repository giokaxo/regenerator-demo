
export default class FundSendCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretWord')) {
      this.setSecretWord(data['secretWord']);
    }
  }


  get clientId(): string {
    return this._fields['clientId'];
  }
  
  getClientId(): string {
      return this._fields['clientId'];
  }

  setClientId(value: string) {
    this._fields['clientId'] = value;

    return this;
  }

  get secretWord(): string {
    return this._fields['secretWord'];
  }
  
  getSecretWord(): string {
      return this._fields['secretWord'];
  }

  setSecretWord(value: string) {
    this._fields['secretWord'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientId')) {
      data['clientId'] = this['clientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretWord')) {
      data['secretWord'] = this['secretWord'];
    }

    return data;
  }
}

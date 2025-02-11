
export default class NinjaWalletCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secret')) {
      this.setSecret(data['secret']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'passphrase')) {
      this.setPassphrase(data['passphrase']);
    }
  }


  get apiKey(): string {
    return this._fields['apiKey'];
  }
  
  getApiKey(): string {
      return this._fields['apiKey'];
  }

  setApiKey(value: string) {
    this._fields['apiKey'] = value;

    return this;
  }

  get secret(): string {
    return this._fields['secret'];
  }
  
  getSecret(): string {
      return this._fields['secret'];
  }

  setSecret(value: string) {
    this._fields['secret'] = value;

    return this;
  }

  get passphrase(): string {
    return this._fields['passphrase'];
  }
  
  getPassphrase(): string {
      return this._fields['passphrase'];
  }

  setPassphrase(value: string) {
    this._fields['passphrase'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secret')) {
      data['secret'] = this['secret'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'passphrase')) {
      data['passphrase'] = this['passphrase'];
    }

    return data;
  }
}

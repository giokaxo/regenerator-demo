
export default class SecurionPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'secretApiKey')) {
      this.setSecretApiKey(data['secretApiKey']);
    }
  }


  get secretApiKey(): string {
    return this._fields['secretApiKey'];
  }
  
  getSecretApiKey(): string {
      return this._fields['secretApiKey'];
  }

  setSecretApiKey(value: string) {
    this._fields['secretApiKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretApiKey')) {
      data['secretApiKey'] = this['secretApiKey'];
    }

    return data;
  }
}

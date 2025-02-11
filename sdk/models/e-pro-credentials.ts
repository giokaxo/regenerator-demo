
export default class EProCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiSecretKey')) {
      this.setApiSecretKey(data['apiSecretKey']);
    }
  }


  get apiSecretKey(): string {
    return this._fields['apiSecretKey'];
  }
  
  getApiSecretKey(): string {
      return this._fields['apiSecretKey'];
  }

  setApiSecretKey(value: string) {
    this._fields['apiSecretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiSecretKey')) {
      data['apiSecretKey'] = this['apiSecretKey'];
    }

    return data;
  }
}

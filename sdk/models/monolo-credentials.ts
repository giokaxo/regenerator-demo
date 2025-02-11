
export default class MonoloCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'businessId')) {
      this.setBusinessId(data['businessId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secret')) {
      this.setSecret(data['secret']);
    }
  }


  get businessId(): string {
    return this._fields['businessId'];
  }
  
  getBusinessId(): string {
      return this._fields['businessId'];
  }

  setBusinessId(value: string) {
    this._fields['businessId'] = value;

    return this;
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'businessId')) {
      data['businessId'] = this['businessId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secret')) {
      data['secret'] = this['secret'];
    }

    return data;
  }
}


export default class OnlineueberweisenCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayApiKey')) {
      this.setNuaPayApiKey(data['nuaPayApiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayAccountId')) {
      this.setNuaPayAccountId(data['nuaPayAccountId']);
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

  get nuaPayApiKey(): string | null {
    return this._fields['nuaPayApiKey'] ?? null;
  }
  
  getNuaPayApiKey(): string | null {
      return this._fields['nuaPayApiKey'] ?? null;
  }

  setNuaPayApiKey(value: null | string) {
    this._fields['nuaPayApiKey'] = value;

    return this;
  }

  get nuaPayAccountId(): string | null {
    return this._fields['nuaPayAccountId'] ?? null;
  }
  
  getNuaPayAccountId(): string | null {
      return this._fields['nuaPayAccountId'] ?? null;
  }

  setNuaPayAccountId(value: null | string) {
    this._fields['nuaPayAccountId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nuaPayApiKey')) {
      data['nuaPayApiKey'] = this['nuaPayApiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nuaPayAccountId')) {
      data['nuaPayAccountId'] = this['nuaPayAccountId'];
    }

    return data;
  }
}

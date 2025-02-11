
export default class SofortCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'configKey')) {
      this.setConfigKey(data['configKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayApiKey')) {
      this.setNuaPayApiKey(data['nuaPayApiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayAccountId')) {
      this.setNuaPayAccountId(data['nuaPayAccountId']);
    }
  }


  get configKey(): string {
    return this._fields['configKey'];
  }
  
  getConfigKey(): string {
      return this._fields['configKey'];
  }

  setConfigKey(value: string) {
    this._fields['configKey'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'configKey')) {
      data['configKey'] = this['configKey'];
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

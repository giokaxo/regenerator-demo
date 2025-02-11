
export default class EMerchantPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
  }


  get clientId(): string | null {
    return this._fields['clientId'] ?? null;
  }
  
  getClientId(): string | null {
      return this._fields['clientId'] ?? null;
  }

  setClientId(value: null | string) {
    this._fields['clientId'] = value;

    return this;
  }

  get apiKey(): string | null {
    return this._fields['apiKey'] ?? null;
  }
  
  getApiKey(): string | null {
      return this._fields['apiKey'] ?? null;
  }

  setApiKey(value: null | string) {
    this._fields['apiKey'] = value;

    return this;
  }

  get username(): string | null {
    return this._fields['username'] ?? null;
  }
  
  getUsername(): string | null {
      return this._fields['username'] ?? null;
  }

  setUsername(value: null | string) {
    this._fields['username'] = value;

    return this;
  }

  get token(): string | null {
    return this._fields['token'] ?? null;
  }
  
  getToken(): string | null {
      return this._fields['token'] ?? null;
  }

  setToken(value: null | string) {
    this._fields['token'] = value;

    return this;
  }

  get password(): string | null {
    return this._fields['password'] ?? null;
  }
  
  getPassword(): string | null {
      return this._fields['password'] ?? null;
  }

  setPassword(value: null | string) {
    this._fields['password'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientId')) {
      data['clientId'] = this['clientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'username')) {
      data['username'] = this['username'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }

    return data;
  }
}

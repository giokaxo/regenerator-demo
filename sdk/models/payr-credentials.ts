
export default class PayrCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretWord')) {
      this.setSecretWord(data['secretWord']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiUserId')) {
      this.setApiUserId(data['apiUserId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiSecurityToken')) {
      this.setApiSecurityToken(data['apiSecurityToken']);
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

  get apiUserId(): string | null {
    return this._fields['apiUserId'] ?? null;
  }
  
  getApiUserId(): string | null {
      return this._fields['apiUserId'] ?? null;
  }

  setApiUserId(value: null | string) {
    this._fields['apiUserId'] = value;

    return this;
  }

  get apiSecurityToken(): string | null {
    return this._fields['apiSecurityToken'] ?? null;
  }
  
  getApiSecurityToken(): string | null {
      return this._fields['apiSecurityToken'] ?? null;
  }

  setApiSecurityToken(value: null | string) {
    this._fields['apiSecurityToken'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiUserId')) {
      data['apiUserId'] = this['apiUserId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiSecurityToken')) {
      data['apiSecurityToken'] = this['apiSecurityToken'];
    }

    return data;
  }
}


export default class PaymenTechnologiesCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'authenticateId')) {
      this.setAuthenticateId(data['authenticateId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authenticatePw')) {
      this.setAuthenticatePw(data['authenticatePw']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'publicKey')) {
      this.setPublicKey(data['publicKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
  }


  get authenticateId(): string {
    return this._fields['authenticateId'];
  }
  
  getAuthenticateId(): string {
      return this._fields['authenticateId'];
  }

  setAuthenticateId(value: string) {
    this._fields['authenticateId'] = value;

    return this;
  }

  get authenticatePw(): string {
    return this._fields['authenticatePw'];
  }
  
  getAuthenticatePw(): string {
      return this._fields['authenticatePw'];
  }

  setAuthenticatePw(value: string) {
    this._fields['authenticatePw'] = value;

    return this;
  }

  get publicKey(): string {
    return this._fields['publicKey'];
  }
  
  getPublicKey(): string {
      return this._fields['publicKey'];
  }

  setPublicKey(value: string) {
    this._fields['publicKey'] = value;

    return this;
  }

  get secretKey(): string {
    return this._fields['secretKey'];
  }
  
  getSecretKey(): string {
      return this._fields['secretKey'];
  }

  setSecretKey(value: string) {
    this._fields['secretKey'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authenticateId')) {
      data['authenticateId'] = this['authenticateId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authenticatePw')) {
      data['authenticatePw'] = this['authenticatePw'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicKey')) {
      data['publicKey'] = this['publicKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }

    return data;
  }
}

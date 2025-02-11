
export default class AstroPayCardCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'x_login')) {
      this.setXLogin(data['x_login']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'x_tran_key')) {
      this.setXTranKey(data['x_tran_key']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secret_key')) {
      this.setSecretKey(data['secret_key']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'api_key')) {
      this.setApiKey(data['api_key']);
    }
  }


  get xLogin(): string {
    return this._fields['x_login'];
  }
  
  getXLogin(): string {
      return this._fields['x_login'];
  }

  setXLogin(value: string) {
    this._fields['x_login'] = value;

    return this;
  }

  get xTranKey(): string {
    return this._fields['x_tran_key'];
  }
  
  getXTranKey(): string {
      return this._fields['x_tran_key'];
  }

  setXTranKey(value: string) {
    this._fields['x_tran_key'] = value;

    return this;
  }

  get secretKey(): string {
    return this._fields['secret_key'];
  }
  
  getSecretKey(): string {
      return this._fields['secret_key'];
  }

  setSecretKey(value: string) {
    this._fields['secret_key'] = value;

    return this;
  }

  get apiKey(): string | null {
    return this._fields['api_key'] ?? null;
  }
  
  getApiKey(): string | null {
      return this._fields['api_key'] ?? null;
  }

  setApiKey(value: null | string) {
    this._fields['api_key'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xLogin')) {
      data['x_login'] = this['xLogin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xTranKey')) {
      data['x_tran_key'] = this['xTranKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secret_key'] = this['secretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['api_key'] = this['apiKey'];
    }

    return data;
  }
}


export default class DropaymentCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'login')) {
      this.setLogin(data['login']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'endpointId')) {
      this.setEndpointId(data['endpointId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
  }


  get login(): string {
    return this._fields['login'];
  }
  
  getLogin(): string {
      return this._fields['login'];
  }

  setLogin(value: string) {
    this._fields['login'] = value;

    return this;
  }

  get endpointId(): string {
    return this._fields['endpointId'];
  }
  
  getEndpointId(): string {
      return this._fields['endpointId'];
  }

  setEndpointId(value: string) {
    this._fields['endpointId'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'login')) {
      data['login'] = this['login'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'endpointId')) {
      data['endpointId'] = this['endpointId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }

    return data;
  }
}

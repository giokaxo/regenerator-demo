
export default class LimepayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'xLogin')) {
      this.setXLogin(data['xLogin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'xTransKey')) {
      this.setXTransKey(data['xTransKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
  }


  get xLogin(): string {
    return this._fields['xLogin'];
  }
  
  getXLogin(): string {
      return this._fields['xLogin'];
  }

  setXLogin(value: string) {
    this._fields['xLogin'] = value;

    return this;
  }

  get xTransKey(): string {
    return this._fields['xTransKey'];
  }
  
  getXTransKey(): string {
      return this._fields['xTransKey'];
  }

  setXTransKey(value: string) {
    this._fields['xTransKey'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xLogin')) {
      data['xLogin'] = this['xLogin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xTransKey')) {
      data['xTransKey'] = this['xTransKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }

    return data;
  }
}

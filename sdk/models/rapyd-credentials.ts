
export default class RapydCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accessKey')) {
      this.setAccessKey(data['accessKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
  }


  get accessKey(): string {
    return this._fields['accessKey'];
  }
  
  getAccessKey(): string {
      return this._fields['accessKey'];
  }

  setAccessKey(value: string) {
    this._fields['accessKey'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accessKey')) {
      data['accessKey'] = this['accessKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }

    return data;
  }
}

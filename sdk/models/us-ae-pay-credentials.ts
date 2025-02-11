
export default class USAePayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'sourceKey')) {
      this.setSourceKey(data['sourceKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'pin')) {
      this.setPin(data['pin']);
    }
  }


  get sourceKey(): string {
    return this._fields['sourceKey'];
  }
  
  getSourceKey(): string {
      return this._fields['sourceKey'];
  }

  setSourceKey(value: string) {
    this._fields['sourceKey'] = value;

    return this;
  }

  get pin(): string {
    return this._fields['pin'];
  }
  
  getPin(): string {
      return this._fields['pin'];
  }

  setPin(value: string) {
    this._fields['pin'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sourceKey')) {
      data['sourceKey'] = this['sourceKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pin')) {
      data['pin'] = this['pin'];
    }

    return data;
  }
}

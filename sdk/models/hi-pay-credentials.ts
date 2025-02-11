
export default class HiPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiUsername')) {
      this.setApiUsername(data['apiUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiPassword')) {
      this.setApiPassword(data['apiPassword']);
    }
  }


  get apiUsername(): string {
    return this._fields['apiUsername'];
  }
  
  getApiUsername(): string {
      return this._fields['apiUsername'];
  }

  setApiUsername(value: string) {
    this._fields['apiUsername'] = value;

    return this;
  }

  get apiPassword(): string {
    return this._fields['apiPassword'];
  }
  
  getApiPassword(): string {
      return this._fields['apiPassword'];
  }

  setApiPassword(value: string) {
    this._fields['apiPassword'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiUsername')) {
      data['apiUsername'] = this['apiUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiPassword')) {
      data['apiPassword'] = this['apiPassword'];
    }

    return data;
  }
}

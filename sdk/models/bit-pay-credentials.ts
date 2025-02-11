
export default class BitPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
  }


  get token(): string {
    return this._fields['token'];
  }
  
  getToken(): string {
      return this._fields['token'];
  }

  setToken(value: string) {
    this._fields['token'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }

    return data;
  }
}

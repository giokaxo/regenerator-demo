
export default class KonnektiveCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'loginId')) {
      this.setLoginId(data['loginId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
  }


  get loginId(): string {
    return this._fields['loginId'];
  }
  
  getLoginId(): string {
      return this._fields['loginId'];
  }

  setLoginId(value: string) {
    this._fields['loginId'] = value;

    return this;
  }

  get password(): string {
    return this._fields['password'];
  }
  
  getPassword(): string {
      return this._fields['password'];
  }

  setPassword(value: string) {
    this._fields['password'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'loginId')) {
      data['loginId'] = this['loginId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }

    return data;
  }
}


export default class EutellerCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
  }


  get username(): string {
    return this._fields['username'];
  }
  
  getUsername(): string {
      return this._fields['username'];
  }

  setUsername(value: string) {
    this._fields['username'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'username')) {
      data['username'] = this['username'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }

    return data;
  }
}

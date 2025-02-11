
export default class A1GatewayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountId')) {
      this.setAccountId(data['accountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
  }


  get accountId(): string {
    return this._fields['accountId'];
  }
  
  getAccountId(): string {
      return this._fields['accountId'];
  }

  setAccountId(value: string) {
    this._fields['accountId'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountId')) {
      data['accountId'] = this['accountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }

    return data;
  }
}

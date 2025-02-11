
export default class PayflowCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'user')) {
      this.setUser(data['user']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'vendor')) {
      this.setVendor(data['vendor']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
  }


  get user(): string {
    return this._fields['user'];
  }
  
  getUser(): string {
      return this._fields['user'];
  }

  setUser(value: string) {
    this._fields['user'] = value;

    return this;
  }

  get vendor(): string {
    return this._fields['vendor'];
  }
  
  getVendor(): string {
      return this._fields['vendor'];
  }

  setVendor(value: string) {
    this._fields['vendor'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'user')) {
      data['user'] = this['user'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'vendor')) {
      data['vendor'] = this['vendor'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }

    return data;
  }
}


export default class ForgotPassword {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'email')) {
      this.setEmail(data['email']);
    }
  }


  get email(): string {
    return this._fields['email'];
  }
  
  getEmail(): string {
      return this._fields['email'];
  }

  setEmail(value: string) {
    this._fields['email'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'email')) {
      data['email'] = this['email'];
    }

    return data;
  }
}

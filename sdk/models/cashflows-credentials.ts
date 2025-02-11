
export default class CashflowsCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'authenticationId')) {
      this.setAuthenticationId(data['authenticationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authPassword')) {
      this.setAuthPassword(data['authPassword']);
    }
  }


  get authenticationId(): string | null {
    return this._fields['authenticationId'] ?? null;
  }
  
  getAuthenticationId(): string | null {
      return this._fields['authenticationId'] ?? null;
  }

  setAuthenticationId(value: null | string) {
    this._fields['authenticationId'] = value;

    return this;
  }

  get authPassword(): string {
    return this._fields['authPassword'];
  }
  
  getAuthPassword(): string {
      return this._fields['authPassword'];
  }

  setAuthPassword(value: string) {
    this._fields['authPassword'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authenticationId')) {
      data['authenticationId'] = this['authenticationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authPassword')) {
      data['authPassword'] = this['authPassword'];
    }

    return data;
  }
}

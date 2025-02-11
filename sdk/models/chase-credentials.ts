
export default class ChaseCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'coNumber')) {
      this.setCoNumber(data['coNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'divisionId')) {
      this.setDivisionId(data['divisionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'partialAuth')) {
      this.setPartialAuth(data['partialAuth']);
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

  get coNumber(): string {
    return this._fields['coNumber'];
  }
  
  getCoNumber(): string {
      return this._fields['coNumber'];
  }

  setCoNumber(value: string) {
    this._fields['coNumber'] = value;

    return this;
  }

  get divisionId(): string {
    return this._fields['divisionId'];
  }
  
  getDivisionId(): string {
      return this._fields['divisionId'];
  }

  setDivisionId(value: string) {
    this._fields['divisionId'] = value;

    return this;
  }

  get partialAuth(): boolean {
    return this._fields['partialAuth'];
  }
  
  getPartialAuth(): boolean {
      return this._fields['partialAuth'];
  }

  setPartialAuth(value: boolean) {
    this._fields['partialAuth'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'coNumber')) {
      data['coNumber'] = this['coNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'divisionId')) {
      data['divisionId'] = this['divisionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'partialAuth')) {
      data['partialAuth'] = this['partialAuth'];
    }

    return data;
  }
}

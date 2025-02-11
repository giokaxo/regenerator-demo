
export default class PSiGateCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientApiKey')) {
      this.setClientApiKey(data['clientApiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'disputeUsername')) {
      this.setDisputeUsername(data['disputeUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'disputePassword')) {
      this.setDisputePassword(data['disputePassword']);
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

  get clientId(): string {
    return this._fields['clientId'];
  }
  
  getClientId(): string {
      return this._fields['clientId'];
  }

  setClientId(value: string) {
    this._fields['clientId'] = value;

    return this;
  }

  get clientApiKey(): string {
    return this._fields['clientApiKey'];
  }
  
  getClientApiKey(): string {
      return this._fields['clientApiKey'];
  }

  setClientApiKey(value: string) {
    this._fields['clientApiKey'] = value;

    return this;
  }

  get disputeUsername(): string | null {
    return this._fields['disputeUsername'] ?? null;
  }
  
  getDisputeUsername(): string | null {
      return this._fields['disputeUsername'] ?? null;
  }

  setDisputeUsername(value: null | string) {
    this._fields['disputeUsername'] = value;

    return this;
  }

  get disputePassword(): string | null {
    return this._fields['disputePassword'] ?? null;
  }
  
  getDisputePassword(): string | null {
      return this._fields['disputePassword'] ?? null;
  }

  setDisputePassword(value: null | string) {
    this._fields['disputePassword'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientId')) {
      data['clientId'] = this['clientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientApiKey')) {
      data['clientApiKey'] = this['clientApiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disputeUsername')) {
      data['disputeUsername'] = this['disputeUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disputePassword')) {
      data['disputePassword'] = this['disputePassword'];
    }

    return data;
  }
}


export default class LPGCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'publicKey')) {
      this.setPublicKey(data['publicKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secureKey')) {
      this.setSecureKey(data['secureKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payoutUsername')) {
      this.setPayoutUsername(data['payoutUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payoutPassword')) {
      this.setPayoutPassword(data['payoutPassword']);
    }
  }


  get publicKey(): string {
    return this._fields['publicKey'];
  }
  
  getPublicKey(): string {
      return this._fields['publicKey'];
  }

  setPublicKey(value: string) {
    this._fields['publicKey'] = value;

    return this;
  }

  get secureKey(): string {
    return this._fields['secureKey'];
  }
  
  getSecureKey(): string {
      return this._fields['secureKey'];
  }

  setSecureKey(value: string) {
    this._fields['secureKey'] = value;

    return this;
  }

  get payoutUsername(): string | null {
    return this._fields['payoutUsername'] ?? null;
  }
  
  getPayoutUsername(): string | null {
      return this._fields['payoutUsername'] ?? null;
  }

  setPayoutUsername(value: null | string) {
    this._fields['payoutUsername'] = value;

    return this;
  }

  get payoutPassword(): string | null {
    return this._fields['payoutPassword'] ?? null;
  }
  
  getPayoutPassword(): string | null {
      return this._fields['payoutPassword'] ?? null;
  }

  setPayoutPassword(value: null | string) {
    this._fields['payoutPassword'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicKey')) {
      data['publicKey'] = this['publicKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secureKey')) {
      data['secureKey'] = this['secureKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutUsername')) {
      data['payoutUsername'] = this['payoutUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutPassword')) {
      data['payoutPassword'] = this['payoutPassword'];
    }

    return data;
  }
}

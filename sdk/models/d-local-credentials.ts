
export default class DLocalCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'xLogin')) {
      this.setXLogin(data['xLogin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'xTransKey')) {
      this.setXTransKey(data['xTransKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretKey')) {
      this.setSecretKey(data['secretKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'xPayoutLogin')) {
      this.setXPayoutLogin(data['xPayoutLogin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'xPayoutTransKey')) {
      this.setXPayoutTransKey(data['xPayoutTransKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payoutSecretKey')) {
      this.setPayoutSecretKey(data['payoutSecretKey']);
    }
  }


  get xLogin(): string {
    return this._fields['xLogin'];
  }
  
  getXLogin(): string {
      return this._fields['xLogin'];
  }

  setXLogin(value: string) {
    this._fields['xLogin'] = value;

    return this;
  }

  get xTransKey(): string {
    return this._fields['xTransKey'];
  }
  
  getXTransKey(): string {
      return this._fields['xTransKey'];
  }

  setXTransKey(value: string) {
    this._fields['xTransKey'] = value;

    return this;
  }

  get secretKey(): string {
    return this._fields['secretKey'];
  }
  
  getSecretKey(): string {
      return this._fields['secretKey'];
  }

  setSecretKey(value: string) {
    this._fields['secretKey'] = value;

    return this;
  }

  get xPayoutLogin(): string | null {
    return this._fields['xPayoutLogin'] ?? null;
  }
  
  getXPayoutLogin(): string | null {
      return this._fields['xPayoutLogin'] ?? null;
  }

  setXPayoutLogin(value: null | string) {
    this._fields['xPayoutLogin'] = value;

    return this;
  }

  get xPayoutTransKey(): string | null {
    return this._fields['xPayoutTransKey'] ?? null;
  }
  
  getXPayoutTransKey(): string | null {
      return this._fields['xPayoutTransKey'] ?? null;
  }

  setXPayoutTransKey(value: null | string) {
    this._fields['xPayoutTransKey'] = value;

    return this;
  }

  get payoutSecretKey(): string | null {
    return this._fields['payoutSecretKey'] ?? null;
  }
  
  getPayoutSecretKey(): string | null {
      return this._fields['payoutSecretKey'] ?? null;
  }

  setPayoutSecretKey(value: null | string) {
    this._fields['payoutSecretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xLogin')) {
      data['xLogin'] = this['xLogin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xTransKey')) {
      data['xTransKey'] = this['xTransKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secretKey'] = this['secretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xPayoutLogin')) {
      data['xPayoutLogin'] = this['xPayoutLogin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xPayoutTransKey')) {
      data['xPayoutTransKey'] = this['xPayoutTransKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutSecretKey')) {
      data['payoutSecretKey'] = this['payoutSecretKey'];
    }

    return data;
  }
}

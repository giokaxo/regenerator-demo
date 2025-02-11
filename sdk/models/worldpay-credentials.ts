
export default class WorldpayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantCode')) {
      this.setMerchantCode(data['merchantCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantPassword')) {
      this.setMerchantPassword(data['merchantPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payoutMerchantCode')) {
      this.setPayoutMerchantCode(data['payoutMerchantCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payoutMerchantPassword')) {
      this.setPayoutMerchantPassword(data['payoutMerchantPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'alternativePaymentsUsername')) {
      this.setAlternativePaymentsUsername(data['alternativePaymentsUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'alternativePaymentsPassword')) {
      this.setAlternativePaymentsPassword(data['alternativePaymentsPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpUsername')) {
      this.setSftpUsername(data['sftpUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpPrivateKey')) {
      this.setSftpPrivateKey(data['sftpPrivateKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpKeyPassphrase')) {
      this.setSftpKeyPassphrase(data['sftpKeyPassphrase']);
    }
  }


  get merchantCode(): string {
    return this._fields['merchantCode'];
  }
  
  getMerchantCode(): string {
      return this._fields['merchantCode'];
  }

  setMerchantCode(value: string) {
    this._fields['merchantCode'] = value;

    return this;
  }

  get merchantPassword(): string {
    return this._fields['merchantPassword'];
  }
  
  getMerchantPassword(): string {
      return this._fields['merchantPassword'];
  }

  setMerchantPassword(value: string) {
    this._fields['merchantPassword'] = value;

    return this;
  }

  get payoutMerchantCode(): string | null {
    return this._fields['payoutMerchantCode'] ?? null;
  }
  
  getPayoutMerchantCode(): string | null {
      return this._fields['payoutMerchantCode'] ?? null;
  }

  setPayoutMerchantCode(value: null | string) {
    this._fields['payoutMerchantCode'] = value;

    return this;
  }

  get payoutMerchantPassword(): string | null {
    return this._fields['payoutMerchantPassword'] ?? null;
  }
  
  getPayoutMerchantPassword(): string | null {
      return this._fields['payoutMerchantPassword'] ?? null;
  }

  setPayoutMerchantPassword(value: null | string) {
    this._fields['payoutMerchantPassword'] = value;

    return this;
  }

  get alternativePaymentsUsername(): string | null {
    return this._fields['alternativePaymentsUsername'] ?? null;
  }
  
  getAlternativePaymentsUsername(): string | null {
      return this._fields['alternativePaymentsUsername'] ?? null;
  }

  setAlternativePaymentsUsername(value: null | string) {
    this._fields['alternativePaymentsUsername'] = value;

    return this;
  }

  get alternativePaymentsPassword(): string | null {
    return this._fields['alternativePaymentsPassword'] ?? null;
  }
  
  getAlternativePaymentsPassword(): string | null {
      return this._fields['alternativePaymentsPassword'] ?? null;
  }

  setAlternativePaymentsPassword(value: null | string) {
    this._fields['alternativePaymentsPassword'] = value;

    return this;
  }

  get sftpUsername(): string | null {
    return this._fields['sftpUsername'] ?? null;
  }
  
  getSftpUsername(): string | null {
      return this._fields['sftpUsername'] ?? null;
  }

  setSftpUsername(value: null | string) {
    this._fields['sftpUsername'] = value;

    return this;
  }

  get sftpPrivateKey(): string | null {
    return this._fields['sftpPrivateKey'] ?? null;
  }
  
  getSftpPrivateKey(): string | null {
      return this._fields['sftpPrivateKey'] ?? null;
  }

  setSftpPrivateKey(value: null | string) {
    this._fields['sftpPrivateKey'] = value;

    return this;
  }

  get sftpKeyPassphrase(): string | null {
    return this._fields['sftpKeyPassphrase'] ?? null;
  }
  
  getSftpKeyPassphrase(): string | null {
      return this._fields['sftpKeyPassphrase'] ?? null;
  }

  setSftpKeyPassphrase(value: null | string) {
    this._fields['sftpKeyPassphrase'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantCode')) {
      data['merchantCode'] = this['merchantCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantPassword')) {
      data['merchantPassword'] = this['merchantPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutMerchantCode')) {
      data['payoutMerchantCode'] = this['payoutMerchantCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payoutMerchantPassword')) {
      data['payoutMerchantPassword'] = this['payoutMerchantPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'alternativePaymentsUsername')) {
      data['alternativePaymentsUsername'] = this['alternativePaymentsUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'alternativePaymentsPassword')) {
      data['alternativePaymentsPassword'] = this['alternativePaymentsPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sftpUsername')) {
      data['sftpUsername'] = this['sftpUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sftpPrivateKey')) {
      data['sftpPrivateKey'] = this['sftpPrivateKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sftpKeyPassphrase')) {
      data['sftpKeyPassphrase'] = this['sftpKeyPassphrase'];
    }

    return data;
  }
}

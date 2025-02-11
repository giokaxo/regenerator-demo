
export default class IlixiumCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountId')) {
      this.setAccountId(data['accountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'digestPassword')) {
      this.setDigestPassword(data['digestPassword']);
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


  get merchantId(): string {
    return this._fields['merchantId'];
  }
  
  getMerchantId(): string {
      return this._fields['merchantId'];
  }

  setMerchantId(value: string) {
    this._fields['merchantId'] = value;

    return this;
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

  get digestPassword(): string {
    return this._fields['digestPassword'];
  }
  
  getDigestPassword(): string {
      return this._fields['digestPassword'];
  }

  setDigestPassword(value: string) {
    this._fields['digestPassword'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountId')) {
      data['accountId'] = this['accountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'digestPassword')) {
      data['digestPassword'] = this['digestPassword'];
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

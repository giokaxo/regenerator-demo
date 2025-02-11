
export default class PostFinanceCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'pspId')) {
      this.setPspId(data['pspId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantId')) {
      this.setMerchantId(data['merchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpUsername')) {
      this.setSftpUsername(data['sftpUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'publicKey')) {
      this.setPublicKey(data['publicKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privateKey')) {
      this.setPrivateKey(data['privateKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'keyPassphrase')) {
      this.setKeyPassphrase(data['keyPassphrase']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpPrivateKey')) {
      this.setSftpPrivateKey(data['sftpPrivateKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpKeyPassphrase')) {
      this.setSftpKeyPassphrase(data['sftpKeyPassphrase']);
    }
  }


  get pspId(): string {
    return this._fields['pspId'];
  }
  
  getPspId(): string {
      return this._fields['pspId'];
  }

  setPspId(value: string) {
    this._fields['pspId'] = value;

    return this;
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

  get sftpUsername(): string {
    return this._fields['sftpUsername'];
  }
  
  getSftpUsername(): string {
      return this._fields['sftpUsername'];
  }

  setSftpUsername(value: string) {
    this._fields['sftpUsername'] = value;

    return this;
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

  get privateKey(): string {
    return this._fields['privateKey'];
  }
  
  getPrivateKey(): string {
      return this._fields['privateKey'];
  }

  setPrivateKey(value: string) {
    this._fields['privateKey'] = value;

    return this;
  }

  get keyPassphrase(): string {
    return this._fields['keyPassphrase'];
  }
  
  getKeyPassphrase(): string {
      return this._fields['keyPassphrase'];
  }

  setKeyPassphrase(value: string) {
    this._fields['keyPassphrase'] = value;

    return this;
  }

  get sftpPrivateKey(): string {
    return this._fields['sftpPrivateKey'];
  }
  
  getSftpPrivateKey(): string {
      return this._fields['sftpPrivateKey'];
  }

  setSftpPrivateKey(value: string) {
    this._fields['sftpPrivateKey'] = value;

    return this;
  }

  get sftpKeyPassphrase(): string {
    return this._fields['sftpKeyPassphrase'];
  }
  
  getSftpKeyPassphrase(): string {
      return this._fields['sftpKeyPassphrase'];
  }

  setSftpKeyPassphrase(value: string) {
    this._fields['sftpKeyPassphrase'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pspId')) {
      data['pspId'] = this['pspId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantId')) {
      data['merchantId'] = this['merchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sftpUsername')) {
      data['sftpUsername'] = this['sftpUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicKey')) {
      data['publicKey'] = this['publicKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privateKey')) {
      data['privateKey'] = this['privateKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'keyPassphrase')) {
      data['keyPassphrase'] = this['keyPassphrase'];
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

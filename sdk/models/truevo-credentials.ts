
export default class TruevoCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'mid')) {
      this.setMid(data['mid']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tid')) {
      this.setTid(data['tid']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
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


  get mid(): string {
    return this._fields['mid'];
  }
  
  getMid(): string {
      return this._fields['mid'];
  }

  setMid(value: string) {
    this._fields['mid'] = value;

    return this;
  }

  get tid(): string {
    return this._fields['tid'];
  }
  
  getTid(): string {
      return this._fields['tid'];
  }

  setTid(value: string) {
    this._fields['tid'] = value;

    return this;
  }

  get token(): string {
    return this._fields['token'];
  }
  
  getToken(): string {
      return this._fields['token'];
  }

  setToken(value: string) {
    this._fields['token'] = value;

    return this;
  }

  get merchantName(): string | null {
    return this._fields['merchantName'] ?? null;
  }
  
  getMerchantName(): string | null {
      return this._fields['merchantName'] ?? null;
  }

  setMerchantName(value: null | string) {
    this._fields['merchantName'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mid')) {
      data['mid'] = this['mid'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tid')) {
      data['tid'] = this['tid'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
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

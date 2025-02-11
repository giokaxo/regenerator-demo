
export default class WirecardCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantUsername')) {
      this.setMerchantUsername(data['merchantUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantPassword')) {
      this.setMerchantPassword(data['merchantPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'businessSignature')) {
      this.setBusinessSignature(data['businessSignature']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'delay')) {
      this.setDelay(data['delay']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpUsername')) {
      this.setSftpUsername(data['sftpUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpPrivateKey')) {
      this.setSftpPrivateKey(data['sftpPrivateKey']);
    }
  }


  get merchantUsername(): string {
    return this._fields['merchantUsername'];
  }
  
  getMerchantUsername(): string {
      return this._fields['merchantUsername'];
  }

  setMerchantUsername(value: string) {
    this._fields['merchantUsername'] = value;

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

  get businessSignature(): string {
    return this._fields['businessSignature'];
  }
  
  getBusinessSignature(): string {
      return this._fields['businessSignature'];
  }

  setBusinessSignature(value: string) {
    this._fields['businessSignature'] = value;

    return this;
  }

  get delay(): number {
    return this._fields['delay'];
  }
  
  getDelay(): number {
      return this._fields['delay'];
  }

  setDelay(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['delay'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantUsername')) {
      data['merchantUsername'] = this['merchantUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantPassword')) {
      data['merchantPassword'] = this['merchantPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'businessSignature')) {
      data['businessSignature'] = this['businessSignature'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'delay')) {
      data['delay'] = this['delay'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sftpUsername')) {
      data['sftpUsername'] = this['sftpUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sftpPrivateKey')) {
      data['sftpPrivateKey'] = this['sftpPrivateKey'];
    }

    return data;
  }
}


export default class TWINTCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'storeUuid')) {
      this.setStoreUuid(data['storeUuid']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cashRegisterId')) {
      this.setCashRegisterId(data['cashRegisterId']);
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
  }


  get storeUuid(): string {
    return this._fields['storeUuid'];
  }
  
  getStoreUuid(): string {
      return this._fields['storeUuid'];
  }

  setStoreUuid(value: string) {
    this._fields['storeUuid'] = value;

    return this;
  }

  get cashRegisterId(): string {
    return this._fields['cashRegisterId'];
  }
  
  getCashRegisterId(): string {
      return this._fields['cashRegisterId'];
  }

  setCashRegisterId(value: string) {
    this._fields['cashRegisterId'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeUuid')) {
      data['storeUuid'] = this['storeUuid'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cashRegisterId')) {
      data['cashRegisterId'] = this['cashRegisterId'];
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

    return data;
  }
}

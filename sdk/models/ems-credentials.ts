
export default class EMSCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'storeId')) {
      this.setStoreId(data['storeId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'userId')) {
      this.setUserId(data['userId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privateKey')) {
      this.setPrivateKey(data['privateKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privateKeyPassword')) {
      this.setPrivateKeyPassword(data['privateKeyPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientCertificate')) {
      this.setClientCertificate(data['clientCertificate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientCertificatePassword')) {
      this.setClientCertificatePassword(data['clientCertificatePassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'serverCertificate')) {
      this.setServerCertificate(data['serverCertificate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sftpPrivateKey')) {
      this.setSftpPrivateKey(data['sftpPrivateKey']);
    }
  }


  get storeId(): string {
    return this._fields['storeId'];
  }
  
  getStoreId(): string {
      return this._fields['storeId'];
  }

  setStoreId(value: string) {
    this._fields['storeId'] = value;

    return this;
  }

  get userId(): string {
    return this._fields['userId'];
  }
  
  getUserId(): string {
      return this._fields['userId'];
  }

  setUserId(value: string) {
    this._fields['userId'] = value;

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

  get privateKeyPassword(): string {
    return this._fields['privateKeyPassword'];
  }
  
  getPrivateKeyPassword(): string {
      return this._fields['privateKeyPassword'];
  }

  setPrivateKeyPassword(value: string) {
    this._fields['privateKeyPassword'] = value;

    return this;
  }

  get clientCertificate(): string {
    return this._fields['clientCertificate'];
  }
  
  getClientCertificate(): string {
      return this._fields['clientCertificate'];
  }

  setClientCertificate(value: string) {
    this._fields['clientCertificate'] = value;

    return this;
  }

  get clientCertificatePassword(): string {
    return this._fields['clientCertificatePassword'];
  }
  
  getClientCertificatePassword(): string {
      return this._fields['clientCertificatePassword'];
  }

  setClientCertificatePassword(value: string) {
    this._fields['clientCertificatePassword'] = value;

    return this;
  }

  get serverCertificate(): string {
    return this._fields['serverCertificate'];
  }
  
  getServerCertificate(): string {
      return this._fields['serverCertificate'];
  }

  setServerCertificate(value: string) {
    this._fields['serverCertificate'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeId')) {
      data['storeId'] = this['storeId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userId')) {
      data['userId'] = this['userId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privateKey')) {
      data['privateKey'] = this['privateKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privateKeyPassword')) {
      data['privateKeyPassword'] = this['privateKeyPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientCertificate')) {
      data['clientCertificate'] = this['clientCertificate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientCertificatePassword')) {
      data['clientCertificatePassword'] = this['clientCertificatePassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'serverCertificate')) {
      data['serverCertificate'] = this['serverCertificate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sftpPrivateKey')) {
      data['sftpPrivateKey'] = this['sftpPrivateKey'];
    }

    return data;
  }
}

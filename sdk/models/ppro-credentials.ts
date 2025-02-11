
export default class PPROCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'login')) {
      this.setLogin(data['login']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'contractId')) {
      this.setContractId(data['contractId']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'serverCertificate')) {
      this.setServerCertificate(data['serverCertificate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notificationSecret')) {
      this.setNotificationSecret(data['notificationSecret']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sharedSecret')) {
      this.setSharedSecret(data['sharedSecret']);
    }
  }


  get login(): string {
    return this._fields['login'];
  }
  
  getLogin(): string {
      return this._fields['login'];
  }

  setLogin(value: string) {
    this._fields['login'] = value;

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

  get contractId(): string {
    return this._fields['contractId'];
  }
  
  getContractId(): string {
      return this._fields['contractId'];
  }

  setContractId(value: string) {
    this._fields['contractId'] = value;

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

  get notificationSecret(): string {
    return this._fields['notificationSecret'];
  }
  
  getNotificationSecret(): string {
      return this._fields['notificationSecret'];
  }

  setNotificationSecret(value: string) {
    this._fields['notificationSecret'] = value;

    return this;
  }

  get sharedSecret(): string {
    return this._fields['sharedSecret'];
  }
  
  getSharedSecret(): string {
      return this._fields['sharedSecret'];
  }

  setSharedSecret(value: string) {
    this._fields['sharedSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'login')) {
      data['login'] = this['login'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'contractId')) {
      data['contractId'] = this['contractId'];
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'serverCertificate')) {
      data['serverCertificate'] = this['serverCertificate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notificationSecret')) {
      data['notificationSecret'] = this['notificationSecret'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sharedSecret')) {
      data['sharedSecret'] = this['sharedSecret'];
    }

    return data;
  }
}

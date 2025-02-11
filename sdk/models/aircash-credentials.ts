
export default class AircashCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'partnerId')) {
      this.setPartnerId(data['partnerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privateKey')) {
      this.setPrivateKey(data['privateKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'privateKeyPassword')) {
      this.setPrivateKeyPassword(data['privateKeyPassword']);
    }
  }


  get partnerId(): string {
    return this._fields['partnerId'];
  }
  
  getPartnerId(): string {
      return this._fields['partnerId'];
  }

  setPartnerId(value: string) {
    this._fields['partnerId'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'partnerId')) {
      data['partnerId'] = this['partnerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privateKey')) {
      data['privateKey'] = this['privateKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'privateKeyPassword')) {
      data['privateKeyPassword'] = this['privateKeyPassword'];
    }

    return data;
  }
}

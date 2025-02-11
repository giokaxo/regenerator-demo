
export default class MtaPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountId')) {
      this.setAccountId(data['accountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'partyId')) {
      this.setPartyId(data['partyId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'md5key')) {
      this.setMd5key(data['md5key']);
    }
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

  get partyId(): string {
    return this._fields['partyId'];
  }
  
  getPartyId(): string {
      return this._fields['partyId'];
  }

  setPartyId(value: string) {
    this._fields['partyId'] = value;

    return this;
  }

  get md5key(): string {
    return this._fields['md5key'];
  }
  
  getMd5key(): string {
      return this._fields['md5key'];
  }

  setMd5key(value: string) {
    this._fields['md5key'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountId')) {
      data['accountId'] = this['accountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'partyId')) {
      data['partyId'] = this['partyId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'md5key')) {
      data['md5key'] = this['md5key'];
    }

    return data;
  }
}

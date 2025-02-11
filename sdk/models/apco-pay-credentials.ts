
export default class ApcoPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'profileID')) {
      this.setProfileID(data['profileID']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretWord')) {
      this.setSecretWord(data['secretWord']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'MerchantID')) {
      this.setMerchantID(data['MerchantID']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'MerchantPassword')) {
      this.setMerchantPassword(data['MerchantPassword']);
    }
  }


  get profileID(): string {
    return this._fields['profileID'];
  }
  
  getProfileID(): string {
      return this._fields['profileID'];
  }

  setProfileID(value: string) {
    this._fields['profileID'] = value;

    return this;
  }

  get secretWord(): string {
    return this._fields['secretWord'];
  }
  
  getSecretWord(): string {
      return this._fields['secretWord'];
  }

  setSecretWord(value: string) {
    this._fields['secretWord'] = value;

    return this;
  }

  get merchantID(): string {
    return this._fields['MerchantID'];
  }
  
  getMerchantID(): string {
      return this._fields['MerchantID'];
  }

  setMerchantID(value: string) {
    this._fields['MerchantID'] = value;

    return this;
  }

  get merchantPassword(): string {
    return this._fields['MerchantPassword'];
  }
  
  getMerchantPassword(): string {
      return this._fields['MerchantPassword'];
  }

  setMerchantPassword(value: string) {
    this._fields['MerchantPassword'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'profileID')) {
      data['profileID'] = this['profileID'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretWord')) {
      data['secretWord'] = this['secretWord'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantID')) {
      data['MerchantID'] = this['merchantID'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantPassword')) {
      data['MerchantPassword'] = this['merchantPassword'];
    }

    return data;
  }
}

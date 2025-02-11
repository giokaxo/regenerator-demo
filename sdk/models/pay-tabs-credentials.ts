
export default class PayTabsCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'profileId')) {
      this.setProfileId(data['profileId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientKey')) {
      this.setClientKey(data['clientKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'serverKey')) {
      this.setServerKey(data['serverKey']);
    }
  }


  get profileId(): string {
    return this._fields['profileId'];
  }
  
  getProfileId(): string {
      return this._fields['profileId'];
  }

  setProfileId(value: string) {
    this._fields['profileId'] = value;

    return this;
  }

  get clientKey(): string {
    return this._fields['clientKey'];
  }
  
  getClientKey(): string {
      return this._fields['clientKey'];
  }

  setClientKey(value: string) {
    this._fields['clientKey'] = value;

    return this;
  }

  get serverKey(): string {
    return this._fields['serverKey'];
  }
  
  getServerKey(): string {
      return this._fields['serverKey'];
  }

  setServerKey(value: string) {
    this._fields['serverKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'profileId')) {
      data['profileId'] = this['profileId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientKey')) {
      data['clientKey'] = this['clientKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'serverKey')) {
      data['serverKey'] = this['serverKey'];
    }

    return data;
  }
}

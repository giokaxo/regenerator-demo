
export default class PlugnpayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'publisher-name')) {
      this.setPublisherName(data['publisher-name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'publisher-password')) {
      this.setPublisherPassword(data['publisher-password']);
    }
  }


  get publisherName(): string {
    return this._fields['publisher-name'];
  }
  
  getPublisherName(): string {
      return this._fields['publisher-name'];
  }

  setPublisherName(value: string) {
    this._fields['publisher-name'] = value;

    return this;
  }

  get publisherPassword(): string {
    return this._fields['publisher-password'];
  }
  
  getPublisherPassword(): string {
      return this._fields['publisher-password'];
  }

  setPublisherPassword(value: string) {
    this._fields['publisher-password'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publisherName')) {
      data['publisher-name'] = this['publisherName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publisherPassword')) {
      data['publisher-password'] = this['publisherPassword'];
    }

    return data;
  }
}

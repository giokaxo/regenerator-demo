
export default class SMSVoucherCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'AppId')) {
      this.setAppId(data['AppId']);
    }
  }


  get appId(): string {
    return this._fields['AppId'];
  }
  
  getAppId(): string {
      return this._fields['AppId'];
  }

  setAppId(value: string) {
    this._fields['AppId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'appId')) {
      data['AppId'] = this['appId'];
    }

    return data;
  }
}

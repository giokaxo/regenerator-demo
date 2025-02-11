
export default class CleoCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accessToken')) {
      this.setAccessToken(data['accessToken']);
    }
  }


  get accessToken(): string {
    return this._fields['accessToken'];
  }
  
  getAccessToken(): string {
      return this._fields['accessToken'];
  }

  setAccessToken(value: string) {
    this._fields['accessToken'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accessToken')) {
      data['accessToken'] = this['accessToken'];
    }

    return data;
  }
}

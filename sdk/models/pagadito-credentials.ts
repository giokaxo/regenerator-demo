
export default class PagaditoCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'uid')) {
      this.setUid(data['uid']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'wsk')) {
      this.setWsk(data['wsk']);
    }
  }


  get uid(): string {
    return this._fields['uid'];
  }
  
  getUid(): string {
      return this._fields['uid'];
  }

  setUid(value: string) {
    this._fields['uid'] = value;

    return this;
  }

  get wsk(): string {
    return this._fields['wsk'];
  }
  
  getWsk(): string {
      return this._fields['wsk'];
  }

  setWsk(value: string) {
    this._fields['wsk'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'uid')) {
      data['uid'] = this['uid'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'wsk')) {
      data['wsk'] = this['wsk'];
    }

    return data;
  }
}


export default class RPNCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'mid')) {
      this.setMid(data['mid']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'key')) {
      this.setKey(data['key']);
    }
  }


  get mid(): string {
    return this._fields['mid'];
  }
  
  getMid(): string {
      return this._fields['mid'];
  }

  setMid(value: string) {
    this._fields['mid'] = value;

    return this;
  }

  get key(): string {
    return this._fields['key'];
  }
  
  getKey(): string {
      return this._fields['key'];
  }

  setKey(value: string) {
    this._fields['key'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mid')) {
      data['mid'] = this['mid'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'key')) {
      data['key'] = this['key'];
    }

    return data;
  }
}

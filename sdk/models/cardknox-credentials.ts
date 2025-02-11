
export default class CardknoxCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'xKey')) {
      this.setXKey(data['xKey']);
    }
  }


  get xKey(): string {
    return this._fields['xKey'];
  }
  
  getXKey(): string {
      return this._fields['xKey'];
  }

  setXKey(value: string) {
    this._fields['xKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xKey')) {
      data['xKey'] = this['xKey'];
    }

    return data;
  }
}

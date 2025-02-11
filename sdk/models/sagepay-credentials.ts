
export default class SagepayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'M_ID')) {
      this.setMID(data['M_ID']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'M_KEY')) {
      this.setMKEY(data['M_KEY']);
    }
  }


  get mID(): string {
    return this._fields['M_ID'];
  }
  
  getMID(): string {
      return this._fields['M_ID'];
  }

  setMID(value: string) {
    this._fields['M_ID'] = value;

    return this;
  }

  get mKEY(): string {
    return this._fields['M_KEY'];
  }
  
  getMKEY(): string {
      return this._fields['M_KEY'];
  }

  setMKEY(value: string) {
    this._fields['M_KEY'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mID')) {
      data['M_ID'] = this['mID'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mKEY')) {
      data['M_KEY'] = this['mKEY'];
    }

    return data;
  }
}


export default class MtaPaySettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'goods')) {
      this.setGoods(data['goods']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mobilePay')) {
      this.setMobilePay(data['mobilePay']);
    }
  }


  get goods(): string {
    return this._fields['goods'];
  }
  
  getGoods(): string {
      return this._fields['goods'];
  }

  setGoods(value: string) {
    this._fields['goods'] = value;

    return this;
  }

  get mobilePay(): string {
    return this._fields['mobilePay'];
  }
  
  getMobilePay(): string {
      return this._fields['mobilePay'];
  }

  setMobilePay(value: string) {
    this._fields['mobilePay'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'goods')) {
      data['goods'] = this['goods'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mobilePay')) {
      data['mobilePay'] = this['mobilePay'];
    }

    return data;
  }
}

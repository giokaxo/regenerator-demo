
export default class OnlineueberweisenSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'payformCode')) {
      this.setPayformCode(data['payformCode']);
    }
  }


  get payformCode(): string | null {
    return this._fields['payformCode'] ?? null;
  }
  
  getPayformCode(): string | null {
      return this._fields['payformCode'] ?? null;
  }

  setPayformCode(value: null | string) {
    this._fields['payformCode'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payformCode')) {
      data['payformCode'] = this['payformCode'];
    }

    return data;
  }
}

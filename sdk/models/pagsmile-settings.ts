
export default class PagsmileSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useTradePay')) {
      this.setUseTradePay(data['useTradePay']);
    }
  }


  get useTradePay(): boolean | null {
    return this._fields['useTradePay'] ?? null;
  }
  
  getUseTradePay(): boolean | null {
      return this._fields['useTradePay'] ?? null;
  }

  setUseTradePay(value: null | boolean) {
    this._fields['useTradePay'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useTradePay')) {
      data['useTradePay'] = this['useTradePay'];
    }

    return data;
  }
}

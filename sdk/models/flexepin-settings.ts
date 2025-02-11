
export default class FlexepinSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'adjustAmountFromVoucher')) {
      this.setAdjustAmountFromVoucher(data['adjustAmountFromVoucher']);
    }
  }


  get adjustAmountFromVoucher(): boolean | null {
    return this._fields['adjustAmountFromVoucher'] ?? null;
  }
  
  getAdjustAmountFromVoucher(): boolean | null {
      return this._fields['adjustAmountFromVoucher'] ?? null;
  }

  setAdjustAmountFromVoucher(value: null | boolean) {
    this._fields['adjustAmountFromVoucher'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'adjustAmountFromVoucher')) {
      data['adjustAmountFromVoucher'] = this['adjustAmountFromVoucher'];
    }

    return data;
  }
}

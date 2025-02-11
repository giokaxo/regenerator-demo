
export default class TWINTSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'cashRegisterType')) {
      this.setCashRegisterType(data['cashRegisterType']);
    }
  }


  get cashRegisterType(): string {
    return this._fields['cashRegisterType'];
  }
  
  getCashRegisterType(): string {
      return this._fields['cashRegisterType'];
  }

  setCashRegisterType(value: string) {
    this._fields['cashRegisterType'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cashRegisterType')) {
      data['cashRegisterType'] = this['cashRegisterType'];
    }

    return data;
  }
}

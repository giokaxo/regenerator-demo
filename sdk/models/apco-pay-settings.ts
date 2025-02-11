
export default class ApcoPaySettings {
  METHOD_AFTERPAY = 'AFTERPAY';

  METHOD_BANCONTACT = 'BANCONTACT';

  METHOD_CREDITCLICK = 'CREDITCLICK';

  METHOD_FLEXEPIN = 'FLEXEPIN';

  METHOD_IDEAL = 'IDEAL';

  METHOD_JPAY = 'JPAY';

  METHOD_OCTAPAY = 'OCTAPAY';

  METHOD_ONLINEUBERWEISEN = 'ONLINEUBERWEISEN';

  METHOD_ORIENTALWALLET = 'ORIENTALWALLET';

  METHOD_VENUSPOINT = 'VENUSPOINT';

  METHOD_ZIMPLER = 'ZIMPLER';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
  }


  get method(): string {
    return this._fields['method'];
  }
  
  getMethod(): string {
      return this._fields['method'];
  }

  setMethod(value: string) {
    this._fields['method'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }

    return data;
  }
}

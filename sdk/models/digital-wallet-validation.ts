import ApplePayValidation from '../models/apple-pay-validation';

export default class DigitalWalletValidation {
  TYPE_APPLE_PAY = 'Apple Pay';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
  }


  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  private setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }

    return data;
  }
}

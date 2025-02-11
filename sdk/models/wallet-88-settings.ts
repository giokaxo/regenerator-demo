
export default class Wallet88Settings {
  PAYMENT_CARD_METHOD_CREDITCARD = 'creditcard';

  PAYMENT_CARD_METHOD_MASTERCARD = 'mastercard';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'paymentCardMethod')) {
      this.setPaymentCardMethod(data['paymentCardMethod']);
    }
  }


  get paymentCardMethod(): string | null {
    return this._fields['paymentCardMethod'] ?? null;
  }
  
  getPaymentCardMethod(): string | null {
      return this._fields['paymentCardMethod'] ?? null;
  }

  setPaymentCardMethod(value: null | string) {
    this._fields['paymentCardMethod'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentCardMethod')) {
      data['paymentCardMethod'] = this['paymentCardMethod'];
    }

    return data;
  }
}

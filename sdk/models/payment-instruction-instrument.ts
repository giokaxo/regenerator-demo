import { PaymentInstruction } from '../models/payment-instruction';

export default class PaymentInstructionInstrument implements PaymentInstruction {
  get [PaymentInstruction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentId')) {
      this.setPaymentInstrumentId(data['paymentInstrumentId']);
    }
  }


  get paymentInstrumentId(): string {
    return this._fields['paymentInstrumentId'];
  }
  
  getPaymentInstrumentId(): string {
      return this._fields['paymentInstrumentId'];
  }

  setPaymentInstrumentId(value: string) {
    this._fields['paymentInstrumentId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentId')) {
      data['paymentInstrumentId'] = this['paymentInstrumentId'];
    }

    return data;
  }
}

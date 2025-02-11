import BBANType from '../models/bban-type';
import IBANType from '../models/iban-type';
import { PostPaymentInstrumentRequest } from '../models/post-payment-instrument-request';
import { PaymentInstruction } from '../models/payment-instruction';

export default class BankAccountCreatePlain implements PostPaymentInstrumentRequest, PaymentInstruction {
  get [PostPaymentInstrumentRequest](): true {
    return true;
  }

  get [PaymentInstruction](): true {
    return true;
  }

  ACCOUNT_NUMBER_TYPE_IBAN = 'IBAN';

  ACCOUNT_NUMBER_TYPE_BBAN = 'BBAN';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountNumberType')) {
      this.setAccountNumberType(data['accountNumberType']);
    }
  }


  public get method() {
    return 'ach';
  }

  public getMethod() {
    return 'ach';
  }

  get accountNumberType(): string {
    return this._fields['accountNumberType'];
  }
  
  getAccountNumberType(): string {
      return this._fields['accountNumberType'];
  }

  private setAccountNumberType(value: string) {
    this._fields['accountNumberType'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'ach',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountNumberType')) {
      data['accountNumberType'] = this['accountNumberType'];
    }

    return data;
  }
}

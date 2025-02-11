import BBANType from '../models/bban-type';
import IBANType from '../models/iban-type';
import { PostPaymentInstrumentRequest } from '../models/post-payment-instrument-request';
import { PaymentInstruction } from '../models/payment-instruction';
import BankAccountCreatePlain from '../models/bank-account-create-plain';

export default class BankAccountCreatePlainFactory {
  static from(data: any = {}): BankAccountCreatePlain {
    switch(data.accountNumberType) {
      case 'BBAN': return new BBANType(data);
      case 'IBAN': return new IBANType(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

import BankAccountCreatePlain from '../models/bank-account-create-plain';
import PaymentCardCreatePlain from '../models/payment-card-create-plain';
import PaymentInstructionInstrument from '../models/payment-instruction-instrument';
import PaymentInstructionMethods from '../models/payment-instruction-methods';
import PaymentInstructionToken from '../models/payment-instruction-token';
import { PaymentInstruction } from '../models/payment-instruction';

export default class PaymentInstructionFactory {
  static from(data: any = {}): PaymentInstruction {
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentId')) {
      return new PaymentInstructionInstrument(data);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'methods')) {
      return new PaymentInstructionMethods(data);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      return new PaymentInstructionToken(data);
    }
    switch(data.method) {
      case 'ach': return new BankAccountCreatePlain(data);
      case 'payment-card': return new PaymentCardCreatePlain(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

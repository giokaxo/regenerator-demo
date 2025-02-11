import BBANInstrument from '../models/bban-instrument';
import IBANInstrument from '../models/iban-instrument';
import { BankAccountInstrument } from '../models/bank-account-instrument';

export default class BankAccountInstrumentFactory {
  static from(data: any = {}): BankAccountInstrument {
    switch(data.accountNumberType) {
      case 'BBAN': return new BBANInstrument(data);
      case 'IBAN': return new IBANInstrument(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

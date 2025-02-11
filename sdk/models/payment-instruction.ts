import BankAccountCreatePlain from '../models/bank-account-create-plain';
import PaymentCardCreatePlain from '../models/payment-card-create-plain';
import PaymentInstructionInstrument from '../models/payment-instruction-instrument';
import PaymentInstructionMethods from '../models/payment-instruction-methods';
import PaymentInstructionToken from '../models/payment-instruction-token';

export const PaymentInstruction = Symbol('PaymentInstruction');

export interface PaymentInstruction {
  [PaymentInstruction]: true;
  jsonSerialize(): Record<string, any>;
}

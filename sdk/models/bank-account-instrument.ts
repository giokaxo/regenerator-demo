import BBANInstrument from '../models/bban-instrument';
import IBANInstrument from '../models/iban-instrument';

export const BankAccountInstrument = Symbol('BankAccountInstrument');

export interface BankAccountInstrument {
  [BankAccountInstrument]: true;

  get accountNumberType(): string;
  getAccountNumberType(): string;

  get accountNumber(): string;
  getAccountNumber(): string;
  setAccountNumber(value: string): this;
  get bic(): string | null;
  getBic(): string | null;
  setBic(value: null | string): this;
  get bankName(): string | null;
  getBankName(): string | null;
  setBankName(value: null | string): this;
  get last4(): string | null;
  getLast4(): string | null;
  jsonSerialize(): Record<string, any>;
}

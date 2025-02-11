import AlternativePaymentInstrument from '../models/alternative-payment-instrument';
import CashInstrument from '../models/cash-instrument';
import CheckInstrument from '../models/check-instrument';
import VaultedInstrument from '../models/vaulted-instrument';

export const CustomerDefaultPaymentInstrument = Symbol('CustomerDefaultPaymentInstrument');

export interface CustomerDefaultPaymentInstrument {
  [CustomerDefaultPaymentInstrument]: true;
  jsonSerialize(): Record<string, any>;
}

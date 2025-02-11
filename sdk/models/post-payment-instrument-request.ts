import AlternativeInstrument from '../models/alternative-instrument';
import BankAccountCreatePlain from '../models/bank-account-create-plain';
import PaymentCardCreatePlain from '../models/payment-card-create-plain';
import PaymentInstrumentCreateToken from '../models/payment-instrument-create-token';
import PayPalAccount from '../models/pay-pal-account';

export const PostPaymentInstrumentRequest = Symbol('PostPaymentInstrumentRequest');

export interface PostPaymentInstrumentRequest {
  [PostPaymentInstrumentRequest]: true;
  jsonSerialize(): Record<string, any>;
}

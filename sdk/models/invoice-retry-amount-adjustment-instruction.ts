import AmountAdjustmentInstructionNone from '../models/amount-adjustment-instruction-none';
import AmountAdjustmentInstructionPartial from '../models/amount-adjustment-instruction-partial';

export const InvoiceRetryAmountAdjustmentInstruction = Symbol('InvoiceRetryAmountAdjustmentInstruction');

export interface InvoiceRetryAmountAdjustmentInstruction {
  [InvoiceRetryAmountAdjustmentInstruction]: true;

  get method(): string;
  getMethod(): string;
  jsonSerialize(): Record<string, any>;
}

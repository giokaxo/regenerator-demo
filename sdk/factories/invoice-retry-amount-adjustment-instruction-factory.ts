import AmountAdjustmentInstructionNone from '../models/amount-adjustment-instruction-none';
import AmountAdjustmentInstructionPartial from '../models/amount-adjustment-instruction-partial';
import { InvoiceRetryAmountAdjustmentInstruction } from '../models/invoice-retry-amount-adjustment-instruction';

export default class InvoiceRetryAmountAdjustmentInstructionFactory {
  static from(data: any = {}): InvoiceRetryAmountAdjustmentInstruction {
    switch(data.method) {
      case 'none': return new AmountAdjustmentInstructionNone(data);
      case 'partial': return new AmountAdjustmentInstructionPartial(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

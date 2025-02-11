import { InvoiceRetryAmountAdjustmentInstruction } from '../models/invoice-retry-amount-adjustment-instruction';

export default class AmountAdjustmentInstructionNone implements InvoiceRetryAmountAdjustmentInstruction {
  get [InvoiceRetryAmountAdjustmentInstruction](): true {
    return true;
  }

  constructor(data: any = {}) {
  }


  public get method() {
    return 'none';
  }

  public getMethod() {
    return 'none';
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'none',
    };

    return data;
  }
}

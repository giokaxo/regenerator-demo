import { AmountAdjustmentInstructionPartialAfterApprovalPolicy } from '../models/amount-adjustment-instruction-partial-after-approval-policy';

export default class AmountAdjustmentPoliciesDiscountAmountRemaining implements AmountAdjustmentInstructionPartialAfterApprovalPolicy {
  get [AmountAdjustmentInstructionPartialAfterApprovalPolicy](): true {
    return true;
  }

  constructor(data: any = {}) {
  }


  public get method() {
    return 'discount-amount-remaining';
  }

  public getMethod() {
    return 'discount-amount-remaining';
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'discount-amount-remaining',
    };

    return data;
  }
}

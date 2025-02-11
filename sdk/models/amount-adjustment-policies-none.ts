import { AmountAdjustmentInstructionPartialAfterApprovalPolicy } from '../models/amount-adjustment-instruction-partial-after-approval-policy';

export default class AmountAdjustmentPoliciesNone implements AmountAdjustmentInstructionPartialAfterApprovalPolicy {
  get [AmountAdjustmentInstructionPartialAfterApprovalPolicy](): true {
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

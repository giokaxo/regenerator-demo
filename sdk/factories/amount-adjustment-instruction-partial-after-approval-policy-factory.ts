import AmountAdjustmentPoliciesDiscountAmountRemaining from '../models/amount-adjustment-policies-discount-amount-remaining';
import AmountAdjustmentPoliciesNone from '../models/amount-adjustment-policies-none';
import { AmountAdjustmentInstructionPartialAfterApprovalPolicy } from '../models/amount-adjustment-instruction-partial-after-approval-policy';

export default class AmountAdjustmentInstructionPartialAfterApprovalPolicyFactory {
  static from(data: any = {}): AmountAdjustmentInstructionPartialAfterApprovalPolicy {
    switch(data.method) {
      case 'discount-amount-remaining': return new AmountAdjustmentPoliciesDiscountAmountRemaining(data);
      case 'none': return new AmountAdjustmentPoliciesNone(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

import AmountAdjustmentPoliciesDiscountAmountRemaining from '../models/amount-adjustment-policies-discount-amount-remaining';
import AmountAdjustmentPoliciesNone from '../models/amount-adjustment-policies-none';

export const AmountAdjustmentInstructionPartialAfterApprovalPolicy = Symbol('AmountAdjustmentInstructionPartialAfterApprovalPolicy');

export interface AmountAdjustmentInstructionPartialAfterApprovalPolicy {
  [AmountAdjustmentInstructionPartialAfterApprovalPolicy]: true;

  get method(): string;
  getMethod(): string;
  jsonSerialize(): Record<string, any>;
}

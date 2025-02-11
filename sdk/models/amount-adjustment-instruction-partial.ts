import AmountAdjustmentInstructionPartialAfterApprovalPolicyFactory from '../factories/amount-adjustment-instruction-partial-after-approval-policy-factory';
import { InvoiceRetryAmountAdjustmentInstruction } from '../models/invoice-retry-amount-adjustment-instruction';
import { AmountAdjustmentInstructionPartialAfterApprovalPolicy } from '../models/amount-adjustment-instruction-partial-after-approval-policy';

export default class AmountAdjustmentInstructionPartial implements InvoiceRetryAmountAdjustmentInstruction {
  get [InvoiceRetryAmountAdjustmentInstruction](): true {
    return true;
  }

  TYPE_PERCENT = 'percent';

  TYPE_FIXED = 'fixed';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'afterApprovalPolicy')) {
      this.setAfterApprovalPolicy(data['afterApprovalPolicy']);
    }
  }


  public get method() {
    return 'partial';
  }

  public getMethod() {
    return 'partial';
  }

  get value(): number {
    return this._fields['value'];
  }
  
  getValue(): number {
      return this._fields['value'];
  }

  setValue(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['value'] = value;

    return this;
  }

  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  get afterApprovalPolicy(): AmountAdjustmentInstructionPartialAfterApprovalPolicy | null {
    return this._fields['afterApprovalPolicy'] ?? null;
  }
  
  getAfterApprovalPolicy(): AmountAdjustmentInstructionPartialAfterApprovalPolicy | null {
      return this._fields['afterApprovalPolicy'] ?? null;
  }

  setAfterApprovalPolicy(value: null | AmountAdjustmentInstructionPartialAfterApprovalPolicy | any) {
    if (value !== null && !(value[AmountAdjustmentInstructionPartialAfterApprovalPolicy])) {
      value = AmountAdjustmentInstructionPartialAfterApprovalPolicyFactory.from(value);
    }

    this._fields['afterApprovalPolicy'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'partial',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'afterApprovalPolicy')) {
      data['afterApprovalPolicy'] = this['afterApprovalPolicy']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

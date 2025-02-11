import InvoiceRetryScheduleInstructionFactory from '../factories/invoice-retry-schedule-instruction-factory';
import InvoiceRetryAmountAdjustmentInstructionFactory from '../factories/invoice-retry-amount-adjustment-instruction-factory';
import { InvoiceRetryScheduleInstruction } from '../models/invoice-retry-schedule-instruction';
import { InvoiceRetryAmountAdjustmentInstruction } from '../models/invoice-retry-amount-adjustment-instruction';

export default class RuleActionScheduleInvoiceRetryAttempts {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'scheduleInstruction')) {
      this.setScheduleInstruction(data['scheduleInstruction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amountAdjustmentInstruction')) {
      this.setAmountAdjustmentInstruction(data['amountAdjustmentInstruction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tryBackupInstruments')) {
      this.setTryBackupInstruments(data['tryBackupInstruments']);
    }
  }


  get scheduleInstruction(): InvoiceRetryScheduleInstruction {
    return this._fields['scheduleInstruction'];
  }
  
  getScheduleInstruction(): InvoiceRetryScheduleInstruction {
      return this._fields['scheduleInstruction'];
  }

  setScheduleInstruction(value: InvoiceRetryScheduleInstruction | any) {
    if (!(value[InvoiceRetryScheduleInstruction])) {
      value = InvoiceRetryScheduleInstructionFactory.from(value);
    }

    this._fields['scheduleInstruction'] = value;

    return this;
  }

  get amountAdjustmentInstruction(): InvoiceRetryAmountAdjustmentInstruction | null {
    return this._fields['amountAdjustmentInstruction'] ?? null;
  }
  
  getAmountAdjustmentInstruction(): InvoiceRetryAmountAdjustmentInstruction | null {
      return this._fields['amountAdjustmentInstruction'] ?? null;
  }

  setAmountAdjustmentInstruction(value: null | InvoiceRetryAmountAdjustmentInstruction | any) {
    if (value !== null && !(value[InvoiceRetryAmountAdjustmentInstruction])) {
      value = InvoiceRetryAmountAdjustmentInstructionFactory.from(value);
    }

    this._fields['amountAdjustmentInstruction'] = value;

    return this;
  }

  get tryBackupInstruments(): boolean | null {
    return this._fields['tryBackupInstruments'] ?? null;
  }
  
  getTryBackupInstruments(): boolean | null {
      return this._fields['tryBackupInstruments'] ?? null;
  }

  setTryBackupInstruments(value: null | boolean) {
    this._fields['tryBackupInstruments'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'scheduleInstruction')) {
      data['scheduleInstruction'] = this['scheduleInstruction'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amountAdjustmentInstruction')) {
      data['amountAdjustmentInstruction'] = this['amountAdjustmentInstruction']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tryBackupInstruments')) {
      data['tryBackupInstruments'] = this['tryBackupInstruments'];
    }

    return data;
  }
}

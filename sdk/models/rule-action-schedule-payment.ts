import ScheduleInstructionFactory from '../factories/schedule-instruction-factory';
import { ScheduleInstruction } from '../models/schedule-instruction';
import RuleAction from '../models/rule-action';

export default class RuleActionSchedulePayment extends RuleAction {
  AMOUNT_POLICY_INVOICE_AMOUNT_DUE = 'invoice-amount-due';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'schedule-payment',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'scheduleInstruction')) {
      this.setScheduleInstruction(data['scheduleInstruction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amountPolicy')) {
      this.setAmountPolicy(data['amountPolicy']);
    }
  }


  get scheduleInstruction(): ScheduleInstruction {
    return this._fields['scheduleInstruction'];
  }
  
  getScheduleInstruction(): ScheduleInstruction {
      return this._fields['scheduleInstruction'];
  }

  setScheduleInstruction(value: ScheduleInstruction | any) {
    if (!(value[ScheduleInstruction])) {
      value = ScheduleInstructionFactory.from(value);
    }

    this._fields['scheduleInstruction'] = value;

    return this;
  }

  get amountPolicy(): string {
    return this._fields['amountPolicy'];
  }
  
  getAmountPolicy(): string {
      return this._fields['amountPolicy'];
  }

  setAmountPolicy(value: string) {
    this._fields['amountPolicy'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'scheduleInstruction')) {
      data['scheduleInstruction'] = this['scheduleInstruction'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amountPolicy')) {
      data['amountPolicy'] = this['amountPolicy'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

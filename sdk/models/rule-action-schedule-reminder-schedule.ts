import ReminderScheduleInstructionFactory from '../factories/reminder-schedule-instruction-factory';
import { ReminderScheduleInstruction } from '../models/reminder-schedule-instruction';

export default class RuleActionScheduleReminderSchedule {
  CHRONOLOGY_BEFORE = 'before';

  CHRONOLOGY_AFTER = 'after';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'instructions')) {
      this.setInstructions(data['instructions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'chronology')) {
      this.setChronology(data['chronology']);
    }
  }


  get instructions(): Array<any> {
    return this._fields['instructions'];
  }
  
  getInstructions(): Array<any> {
      return this._fields['instructions'];
  }

  setInstructions(value: Array<any>) {
    value = value.map(
      (value) => value[ReminderScheduleInstruction] ? value : ReminderScheduleInstructionFactory.from(value),
    );

    this._fields['instructions'] = value;

    return this;
  }

  get chronology(): string {
    return this._fields['chronology'];
  }
  
  getChronology(): string {
      return this._fields['chronology'];
  }

  setChronology(value: string) {
    this._fields['chronology'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'instructions')) {
      data['instructions'] = this['instructions'].map(
          (reminderScheduleInstruction: ReminderScheduleInstruction) => reminderScheduleInstruction.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'chronology')) {
      data['chronology'] = this['chronology'];
    }

    return data;
  }
}

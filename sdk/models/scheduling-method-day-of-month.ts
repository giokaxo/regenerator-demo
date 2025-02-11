import { ServicePeriodAnchorInstruction } from '../models/service-period-anchor-instruction';
import { InvoiceRetryScheduleInstruction } from '../models/invoice-retry-schedule-instruction';
import { PeriodAnchor } from '../models/period-anchor';
import { ScheduleInstruction } from '../models/schedule-instruction';
import { ReminderScheduleInstruction } from '../models/reminder-schedule-instruction';

export default class SchedulingMethodDayOfMonth implements ServicePeriodAnchorInstruction, InvoiceRetryScheduleInstruction, PeriodAnchor, ScheduleInstruction, ReminderScheduleInstruction {
  get [ServicePeriodAnchorInstruction](): true {
    return true;
  }

  get [InvoiceRetryScheduleInstruction](): true {
    return true;
  }

  get [PeriodAnchor](): true {
    return true;
  }

  get [ScheduleInstruction](): true {
    return true;
  }

  get [ReminderScheduleInstruction](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'day')) {
      this.setDay(data['day']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'time')) {
      this.setTime(data['time']);
    }
  }


  public get method() {
    return 'day-of-month';
  }

  public getMethod() {
    return 'day-of-month';
  }

  get day(): number {
    return this._fields['day'];
  }
  
  getDay(): number {
      return this._fields['day'];
  }

  setDay(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['day'] = value;

    return this;
  }

  get time(): string | null {
    return this._fields['time'] ?? null;
  }
  
  getTime(): string | null {
      return this._fields['time'] ?? null;
  }

  setTime(value: null | string) {
    this._fields['time'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'day-of-month',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'day')) {
      data['day'] = this['day'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'time')) {
      data['time'] = this['time'];
    }

    return data;
  }
}

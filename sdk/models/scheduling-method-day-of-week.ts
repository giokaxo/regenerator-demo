import { ServicePeriodAnchorInstruction } from '../models/service-period-anchor-instruction';
import { InvoiceRetryScheduleInstruction } from '../models/invoice-retry-schedule-instruction';
import { PeriodAnchor } from '../models/period-anchor';
import { ScheduleInstruction } from '../models/schedule-instruction';
import { ReminderScheduleInstruction } from '../models/reminder-schedule-instruction';

export default class SchedulingMethodDayOfWeek implements ServicePeriodAnchorInstruction, InvoiceRetryScheduleInstruction, PeriodAnchor, ScheduleInstruction, ReminderScheduleInstruction {
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

  DAY_SUNDAY = 'Sunday';

  DAY_MONDAY = 'Monday';

  DAY_TUESDAY = 'Tuesday';

  DAY_WEDNESDAY = 'Wednesday';

  DAY_THURSDAY = 'Thursday';

  DAY_FRIDAY = 'Friday';

  DAY_SATURDAY = 'Saturday';

  WEEK_NEXT = 'next';

  WEEK_FIRST_IN_MONTH = 'first-in-month';

  WEEK_LAST_IN_MONTH = 'last-in-month';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'day')) {
      this.setDay(data['day']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'week')) {
      this.setWeek(data['week']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'time')) {
      this.setTime(data['time']);
    }
  }


  public get method() {
    return 'day-of-week';
  }

  public getMethod() {
    return 'day-of-week';
  }

  get day(): string {
    return this._fields['day'];
  }
  
  getDay(): string {
      return this._fields['day'];
  }

  setDay(value: string) {
    this._fields['day'] = value;

    return this;
  }

  get week(): string {
    return this._fields['week'];
  }
  
  getWeek(): string {
      return this._fields['week'];
  }

  setWeek(value: string) {
    this._fields['week'] = value;

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
      method: 'day-of-week',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'day')) {
      data['day'] = this['day'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'week')) {
      data['week'] = this['week'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'time')) {
      data['time'] = this['time'];
    }

    return data;
  }
}

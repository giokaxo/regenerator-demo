import PeriodAnchorFactory from '../factories/period-anchor-factory';
import { InvoiceRetryScheduleInstruction } from '../models/invoice-retry-schedule-instruction';
import { SettlementPeriod } from '../models/settlement-period';
import { ScheduleInstruction } from '../models/schedule-instruction';
import { ReminderScheduleInstruction } from '../models/reminder-schedule-instruction';
import { PeriodAnchor } from '../models/period-anchor';

export default class SchedulingMethodDateInterval implements InvoiceRetryScheduleInstruction, SettlementPeriod, ScheduleInstruction, ReminderScheduleInstruction {
  get [InvoiceRetryScheduleInstruction](): true {
    return true;
  }

  get [SettlementPeriod](): true {
    return true;
  }

  get [ScheduleInstruction](): true {
    return true;
  }

  get [ReminderScheduleInstruction](): true {
    return true;
  }

  UNIT_SECOND = 'second';

  UNIT_MINUTE = 'minute';

  UNIT_HOUR = 'hour';

  UNIT_DAY = 'day';

  UNIT_MONTH = 'month';

  UNIT_YEAR = 'year';

  UNIT_SECONDS = 'seconds';

  UNIT_MINUTES = 'minutes';

  UNIT_HOURS = 'hours';

  UNIT_DAYS = 'days';

  UNIT_MONTHS = 'months';

  UNIT_YEARS = 'years';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'duration')) {
      this.setDuration(data['duration']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unit')) {
      this.setUnit(data['unit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'anchor')) {
      this.setAnchor(data['anchor']);
    }
  }


  public get method() {
    return 'date-interval';
  }

  public getMethod() {
    return 'date-interval';
  }

  get duration(): number {
    return this._fields['duration'];
  }
  
  getDuration(): number {
      return this._fields['duration'];
  }

  setDuration(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['duration'] = value;

    return this;
  }

  get unit(): string {
    return this._fields['unit'];
  }
  
  getUnit(): string {
      return this._fields['unit'];
  }

  setUnit(value: string) {
    this._fields['unit'] = value;

    return this;
  }

  get anchor(): PeriodAnchor | null {
    return this._fields['anchor'] ?? null;
  }
  
  getAnchor(): PeriodAnchor | null {
      return this._fields['anchor'] ?? null;
  }

  setAnchor(value: null | PeriodAnchor | any) {
    if (value !== null && !(value[PeriodAnchor])) {
      value = PeriodAnchorFactory.from(value);
    }

    this._fields['anchor'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'date-interval',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'duration')) {
      data['duration'] = this['duration'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unit')) {
      data['unit'] = this['unit'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'anchor')) {
      data['anchor'] = this['anchor']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

import SchedulingMethodDateInterval from '../models/scheduling-method-date-interval';
import SchedulingMethodDayOfMonth from '../models/scheduling-method-day-of-month';
import SchedulingMethodDayOfWeek from '../models/scheduling-method-day-of-week';
import SchedulingMethodImmediately from '../models/scheduling-method-immediately';
import SchedulingMethodIntelligent from '../models/scheduling-method-intelligent';

export const InvoiceRetryScheduleInstruction = Symbol('InvoiceRetryScheduleInstruction');

export interface InvoiceRetryScheduleInstruction {
  [InvoiceRetryScheduleInstruction]: true;

  get method(): string;
  getMethod(): string;
  jsonSerialize(): Record<string, any>;
}

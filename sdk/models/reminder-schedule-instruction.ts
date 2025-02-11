import SchedulingMethodDateInterval from '../models/scheduling-method-date-interval';
import SchedulingMethodDayOfMonth from '../models/scheduling-method-day-of-month';
import SchedulingMethodDayOfWeek from '../models/scheduling-method-day-of-week';

export const ReminderScheduleInstruction = Symbol('ReminderScheduleInstruction');

export interface ReminderScheduleInstruction {
  [ReminderScheduleInstruction]: true;

  get method(): string;
  getMethod(): string;
  jsonSerialize(): Record<string, any>;
}

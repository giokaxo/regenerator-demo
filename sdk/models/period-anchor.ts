import SchedulingMethodDayOfMonth from '../models/scheduling-method-day-of-month';
import SchedulingMethodDayOfWeek from '../models/scheduling-method-day-of-week';

export const PeriodAnchor = Symbol('PeriodAnchor');

export interface PeriodAnchor {
  [PeriodAnchor]: true;

  get method(): string;
  getMethod(): string;

  get time(): string | null;
  getTime(): string | null;
  setTime(value: null | string): this;  jsonSerialize(): Record<string, any>;
}

import SchedulingMethodDayOfMonth from '../models/scheduling-method-day-of-month';
import SchedulingMethodDayOfWeek from '../models/scheduling-method-day-of-week';

export const ServicePeriodAnchorInstruction = Symbol('ServicePeriodAnchorInstruction');

export interface ServicePeriodAnchorInstruction {
  [ServicePeriodAnchorInstruction]: true;

  get method(): string;
  getMethod(): string;

  get time(): string | null;
  getTime(): string | null;
  setTime(value: null | string): this;  jsonSerialize(): Record<string, any>;
}

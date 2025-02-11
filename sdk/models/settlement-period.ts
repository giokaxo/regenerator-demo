import SchedulingMethodDateInterval from '../models/scheduling-method-date-interval';
import SchedulingMethodImmediately from '../models/scheduling-method-immediately';

export const SettlementPeriod = Symbol('SettlementPeriod');

export interface SettlementPeriod {
  [SettlementPeriod]: true;

  get method(): string;
  getMethod(): string;
  jsonSerialize(): Record<string, any>;
}

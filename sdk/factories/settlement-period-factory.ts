import SchedulingMethodDateInterval from '../models/scheduling-method-date-interval';
import SchedulingMethodImmediately from '../models/scheduling-method-immediately';
import { SettlementPeriod } from '../models/settlement-period';

export default class SettlementPeriodFactory {
  static from(data: any = {}): SettlementPeriod {
    switch(data.method) {
      case 'date-interval': return new SchedulingMethodDateInterval(data);
      case 'immediately': return new SchedulingMethodImmediately(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

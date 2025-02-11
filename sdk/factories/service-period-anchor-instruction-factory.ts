import SchedulingMethodDayOfMonth from '../models/scheduling-method-day-of-month';
import SchedulingMethodDayOfWeek from '../models/scheduling-method-day-of-week';
import { ServicePeriodAnchorInstruction } from '../models/service-period-anchor-instruction';

export default class ServicePeriodAnchorInstructionFactory {
  static from(data: any = {}): ServicePeriodAnchorInstruction {
    switch(data.method) {
      case 'day-of-month': return new SchedulingMethodDayOfMonth(data);
      case 'day-of-week': return new SchedulingMethodDayOfWeek(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

import SchedulingMethodAuto from '../models/scheduling-method-auto';
import SchedulingMethodDateInterval from '../models/scheduling-method-date-interval';
import SchedulingMethodDayOfMonth from '../models/scheduling-method-day-of-month';
import SchedulingMethodDayOfWeek from '../models/scheduling-method-day-of-week';
import SchedulingMethodImmediately from '../models/scheduling-method-immediately';
import SchedulingMethodIntelligent from '../models/scheduling-method-intelligent';
import { ScheduleInstruction } from '../models/schedule-instruction';

export default class ScheduleInstructionFactory {
  static from(data: any = {}): ScheduleInstruction {
    switch(data.method) {
      case 'auto': return new SchedulingMethodAuto(data);
      case 'date-interval': return new SchedulingMethodDateInterval(data);
      case 'day-of-month': return new SchedulingMethodDayOfMonth(data);
      case 'day-of-week': return new SchedulingMethodDayOfWeek(data);
      case 'immediately': return new SchedulingMethodImmediately(data);
      case 'intelligent': return new SchedulingMethodIntelligent(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

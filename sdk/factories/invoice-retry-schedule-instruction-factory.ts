import SchedulingMethodDateInterval from '../models/scheduling-method-date-interval';
import SchedulingMethodDayOfMonth from '../models/scheduling-method-day-of-month';
import SchedulingMethodDayOfWeek from '../models/scheduling-method-day-of-week';
import SchedulingMethodImmediately from '../models/scheduling-method-immediately';
import SchedulingMethodIntelligent from '../models/scheduling-method-intelligent';
import { InvoiceRetryScheduleInstruction } from '../models/invoice-retry-schedule-instruction';

export default class InvoiceRetryScheduleInstructionFactory {
  static from(data: any = {}): InvoiceRetryScheduleInstruction {
    switch(data.method) {
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

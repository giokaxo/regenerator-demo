import SchedulingMethodDateInterval from '../models/scheduling-method-date-interval';
import SchedulingMethodDayOfMonth from '../models/scheduling-method-day-of-month';
import SchedulingMethodDayOfWeek from '../models/scheduling-method-day-of-week';
import { ReminderScheduleInstruction } from '../models/reminder-schedule-instruction';

export default class ReminderScheduleInstructionFactory {
  static from(data: any = {}): ReminderScheduleInstruction {
    switch(data.method) {
      case 'date-interval': return new SchedulingMethodDateInterval(data);
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

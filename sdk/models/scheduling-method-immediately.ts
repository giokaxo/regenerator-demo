import { InvoiceRetryScheduleInstruction } from '../models/invoice-retry-schedule-instruction';
import { SettlementPeriod } from '../models/settlement-period';
import { ScheduleInstruction } from '../models/schedule-instruction';

export default class SchedulingMethodImmediately implements InvoiceRetryScheduleInstruction, SettlementPeriod, ScheduleInstruction {
  get [InvoiceRetryScheduleInstruction](): true {
    return true;
  }

  get [SettlementPeriod](): true {
    return true;
  }

  get [ScheduleInstruction](): true {
    return true;
  }

  constructor(data: any = {}) {
  }


  public get method() {
    return 'immediately';
  }

  public getMethod() {
    return 'immediately';
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'immediately',
    };

    return data;
  }
}

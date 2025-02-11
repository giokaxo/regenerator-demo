import { ScheduleInstruction } from '../models/schedule-instruction';

export default class SchedulingMethodAuto implements ScheduleInstruction {
  get [ScheduleInstruction](): true {
    return true;
  }

  constructor(data: any = {}) {
  }


  public get method() {
    return 'auto';
  }

  public getMethod() {
    return 'auto';
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'auto',
    };

    return data;
  }
}

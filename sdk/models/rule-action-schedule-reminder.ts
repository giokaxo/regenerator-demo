import RuleActionScheduleReminderSchedule from '../models/rule-action-schedule-reminder-schedule';
import RuleAction from '../models/rule-action';

export default class RuleActionScheduleReminder extends RuleAction {
  ROLE_ALL = 'all';

  ROLE_RENEWAL = 'renewal';

  ROLE_TRIAL_END = 'trial-end';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'schedule-reminder',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'role')) {
      this.setRole(data['role']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'schedule')) {
      this.setSchedule(data['schedule']);
    }
  }


  get role(): string {
    return this._fields['role'];
  }
  
  getRole(): string {
      return this._fields['role'];
  }

  setRole(value: string) {
    this._fields['role'] = value;

    return this;
  }

  get schedule(): RuleActionScheduleReminderSchedule | null {
    return this._fields['schedule'] ?? null;
  }
  
  getSchedule(): RuleActionScheduleReminderSchedule | null {
      return this._fields['schedule'] ?? null;
  }

  setSchedule(value: null | RuleActionScheduleReminderSchedule | any) {
    if (value !== null && !(value instanceof RuleActionScheduleReminderSchedule)) {
      value = new RuleActionScheduleReminderSchedule(value);
    }

    this._fields['schedule'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'role')) {
      data['role'] = this['role'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'schedule')) {
      data['schedule'] = this['schedule']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

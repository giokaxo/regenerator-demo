import RuleAction from '../models/rule-action';

export default class RuleActionResetReminder extends RuleAction {
  ROLE_ALL = 'all';

  ROLE_RENEWAL = 'renewal';

  ROLE_TRIAL_END = 'trial-end';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'reset-reminder',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'role')) {
      this.setRole(data['role']);
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'role')) {
      data['role'] = this['role'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

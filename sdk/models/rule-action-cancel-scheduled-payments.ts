import RuleAction from '../models/rule-action';

export default class RuleActionCancelScheduledPayments extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'cancel-scheduled-payments',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'skipStartedServicePeriod')) {
      this.setSkipStartedServicePeriod(data['skipStartedServicePeriod']);
    }
  }


  get skipStartedServicePeriod(): boolean | null {
    return this._fields['skipStartedServicePeriod'] ?? null;
  }
  
  getSkipStartedServicePeriod(): boolean | null {
      return this._fields['skipStartedServicePeriod'] ?? null;
  }

  setSkipStartedServicePeriod(value: null | boolean) {
    this._fields['skipStartedServicePeriod'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'skipStartedServicePeriod')) {
      data['skipStartedServicePeriod'] = this['skipStartedServicePeriod'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

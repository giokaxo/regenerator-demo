import RuleAction from '../models/rule-action';

export default class RuleActionStopSubscriptions extends RuleAction {
  constructor(data: any = {}) {
    super({
      ...data,
      name: 'stop-subscriptions',
    });
  }


}

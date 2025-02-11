import RuleAction from '../models/rule-action';

export default class RuleActionAbandonScheduledPayments extends RuleAction {
  constructor(data: any = {}) {
    super({
      ...data,
      name: 'abandon-scheduled-payments',
    });
  }


}

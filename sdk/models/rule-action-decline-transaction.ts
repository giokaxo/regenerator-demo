import RuleAction from '../models/rule-action';

export default class RuleActionDeclineTransaction extends RuleAction {
  constructor(data: any = {}) {
    super({
      ...data,
      name: 'decline-transaction',
    });
  }


}

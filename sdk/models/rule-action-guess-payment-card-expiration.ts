import RuleAction from '../models/rule-action';

export default class RuleActionGuessPaymentCardExpiration extends RuleAction {
  constructor(data: any = {}) {
    super({
      ...data,
      name: 'guess-payment-card-expiration',
    });
  }


}

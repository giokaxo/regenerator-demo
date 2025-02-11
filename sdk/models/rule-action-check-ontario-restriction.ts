import RuleAction from '../models/rule-action';

export default class RuleActionCheckOntarioRestriction extends RuleAction {
  constructor(data: any = {}) {
    super({
      ...data,
      name: 'check-ontario-restriction',
    });
  }


}

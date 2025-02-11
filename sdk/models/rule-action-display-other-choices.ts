import RuleActionDisplayOtherChoicesChoices from '../models/rule-action-display-other-choices-choices';
import RuleAction from '../models/rule-action';

export default class RuleActionDisplayOtherChoices extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'display-other-choices',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'choices')) {
      this.setChoices(data['choices']);
    }
  }


  get choices(): Array<any> {
    return this._fields['choices'];
  }
  
  getChoices(): Array<any> {
      return this._fields['choices'];
  }

  setChoices(value: Array<any>) {
    value = value.map(
      (value) => value instanceof RuleActionDisplayOtherChoicesChoices ? value : new RuleActionDisplayOtherChoicesChoices(value),
    );

    this._fields['choices'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'choices')) {
      data['choices'] = this['choices'].map(
          (ruleActionDisplayOtherChoicesChoices: RuleActionDisplayOtherChoicesChoices) => ruleActionDisplayOtherChoicesChoices.jsonSerialize()
      );
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

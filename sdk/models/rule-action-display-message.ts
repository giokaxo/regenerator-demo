import RuleActionDisplayMessageMessages from '../models/rule-action-display-message-messages';
import RuleAction from '../models/rule-action';

export default class RuleActionDisplayMessage extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'display-message',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'messages')) {
      this.setMessages(data['messages']);
    }
  }


  get messages(): Array<any> {
    return this._fields['messages'];
  }
  
  getMessages(): Array<any> {
      return this._fields['messages'];
  }

  setMessages(value: Array<any>) {
    value = value.map(
      (value) => value instanceof RuleActionDisplayMessageMessages ? value : new RuleActionDisplayMessageMessages(value),
    );

    this._fields['messages'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'messages')) {
      data['messages'] = this['messages'].map(
          (ruleActionDisplayMessageMessages: RuleActionDisplayMessageMessages) => ruleActionDisplayMessageMessages.jsonSerialize()
      );
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

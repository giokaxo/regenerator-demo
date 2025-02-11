import RulesEmailNotification from '../models/rules-email-notification';
import RuleAction from '../models/rule-action';

export default class RuleActionSendEmail extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'send-email',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'title')) {
      this.setTitle(data['title']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'emails')) {
      this.setEmails(data['emails']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'splitTestStartTime')) {
      this.setSplitTestStartTime(data['splitTestStartTime']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get title(): string | null {
    return this._fields['title'] ?? null;
  }
  
  getTitle(): string | null {
      return this._fields['title'] ?? null;
  }

  setTitle(value: null | string) {
    this._fields['title'] = value;

    return this;
  }

  get emails(): Array<any> {
    return this._fields['emails'];
  }
  
  getEmails(): Array<any> {
      return this._fields['emails'];
  }

  setEmails(value: Array<any>) {
    value = value.map(
      (value) => value instanceof RulesEmailNotification ? value : new RulesEmailNotification(value),
    );

    this._fields['emails'] = value;

    return this;
  }

  get splitTestStartTime(): Date | null {
    return this._fields['splitTestStartTime'] ?? null;
  }
  
  getSplitTestStartTime(): Date | null {
      return this._fields['splitTestStartTime'] ?? null;
  }

  setSplitTestStartTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['splitTestStartTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'title')) {
      data['title'] = this['title'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'emails')) {
      data['emails'] = this['emails'].map(
          (rulesEmailNotification: RulesEmailNotification) => rulesEmailNotification.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'splitTestStartTime')) {
      data['splitTestStartTime'] = this['splitTestStartTime']?.toISOString() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

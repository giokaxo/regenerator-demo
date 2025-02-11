import RuleAction from '../models/rule-action';

export default class RuleActionAddRiskScore extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'add-risk-score',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'score')) {
      this.setScore(data['score']);
    }
  }


  get score(): number | null {
    return this._fields['score'] ?? null;
  }
  
  getScore(): number | null {
      return this._fields['score'] ?? null;
  }

  setScore(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['score'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'score')) {
      data['score'] = this['score'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

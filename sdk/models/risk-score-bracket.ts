import RiskScoreBracketBrackets from '../models/risk-score-bracket-brackets';

export default class RiskScoreBracket {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'brackets')) {
      this.setBrackets(data['brackets']);
    }
  }


  get brackets(): Array<any> {
    return this._fields['brackets'];
  }
  
  getBrackets(): Array<any> {
      return this._fields['brackets'];
  }

  setBrackets(value: Array<any>) {
    value = value.map(
      (value) => value instanceof RiskScoreBracketBrackets ? value : new RiskScoreBracketBrackets(value),
    );

    this._fields['brackets'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'brackets')) {
      data['brackets'] = this['brackets'].map(
          (riskScoreBracketBrackets: RiskScoreBracketBrackets) => riskScoreBracketBrackets.jsonSerialize()
      );
    }

    return data;
  }
}

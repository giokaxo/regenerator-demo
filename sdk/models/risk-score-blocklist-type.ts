
export default class RiskScoreBlocklistType {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'riskScoreThreshold')) {
      this.setRiskScoreThreshold(data['riskScoreThreshold']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ttl')) {
      this.setTtl(data['ttl']);
    }
  }


  get riskScoreThreshold(): number {
    return this._fields['riskScoreThreshold'];
  }
  
  getRiskScoreThreshold(): number {
      return this._fields['riskScoreThreshold'];
  }

  setRiskScoreThreshold(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['riskScoreThreshold'] = value;

    return this;
  }

  get ttl(): number {
    return this._fields['ttl'];
  }
  
  getTtl(): number {
      return this._fields['ttl'];
  }

  setTtl(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['ttl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskScoreThreshold')) {
      data['riskScoreThreshold'] = this['riskScoreThreshold'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ttl')) {
      data['ttl'] = this['ttl'];
    }

    return data;
  }
}

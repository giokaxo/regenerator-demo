
export default class ReportRulesMatchedSummaryData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'rule')) {
      this.setRule(data['rule']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'count')) {
      this.setCount(data['count']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'approvalRate')) {
      this.setApprovalRate(data['approvalRate']);
    }
  }


  get rule(): string | null {
    return this._fields['rule'] ?? null;
  }
  
  getRule(): string | null {
      return this._fields['rule'] ?? null;
  }

  setRule(value: null | string) {
    this._fields['rule'] = value;

    return this;
  }

  get count(): number | null {
    return this._fields['count'] ?? null;
  }
  
  getCount(): number | null {
      return this._fields['count'] ?? null;
  }

  setCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['count'] = value;

    return this;
  }

  get approvalRate(): number | null {
    return this._fields['approvalRate'] ?? null;
  }
  
  getApprovalRate(): number | null {
      return this._fields['approvalRate'] ?? null;
  }

  setApprovalRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['approvalRate'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rule')) {
      data['rule'] = this['rule'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'count')) {
      data['count'] = this['count'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'approvalRate')) {
      data['approvalRate'] = this['approvalRate'];
    }

    return data;
  }
}

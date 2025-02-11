
export default class ReportMonthlyRecurringRevenueDataBreakdown {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'new')) {
      this.setNew(data['new']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reactivation')) {
      this.setReactivation(data['reactivation']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'churned')) {
      this.setChurned(data['churned']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'contraction')) {
      this.setContraction(data['contraction']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expansion')) {
      this.setExpansion(data['expansion']);
    }
  }


  get new(): number | null {
    return this._fields['new'] ?? null;
  }
  
  getNew(): number | null {
      return this._fields['new'] ?? null;
  }

  setNew(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['new'] = value;

    return this;
  }

  get reactivation(): number | null {
    return this._fields['reactivation'] ?? null;
  }
  
  getReactivation(): number | null {
      return this._fields['reactivation'] ?? null;
  }

  setReactivation(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['reactivation'] = value;

    return this;
  }

  get churned(): number | null {
    return this._fields['churned'] ?? null;
  }
  
  getChurned(): number | null {
      return this._fields['churned'] ?? null;
  }

  setChurned(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['churned'] = value;

    return this;
  }

  get contraction(): number | null {
    return this._fields['contraction'] ?? null;
  }
  
  getContraction(): number | null {
      return this._fields['contraction'] ?? null;
  }

  setContraction(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['contraction'] = value;

    return this;
  }

  get expansion(): number | null {
    return this._fields['expansion'] ?? null;
  }
  
  getExpansion(): number | null {
      return this._fields['expansion'] ?? null;
  }

  setExpansion(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expansion'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'new')) {
      data['new'] = this['new'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reactivation')) {
      data['reactivation'] = this['reactivation'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'churned')) {
      data['churned'] = this['churned'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'contraction')) {
      data['contraction'] = this['contraction'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expansion')) {
      data['expansion'] = this['expansion'];
    }

    return data;
  }
}

import DashboardResponseSegmentsTimeseries from '../models/dashboard-response-segments-timeseries';

export default class DashboardResponseSegments {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'previousValue')) {
      this.setPreviousValue(data['previousValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'humanValue')) {
      this.setHumanValue(data['humanValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'changeRatio')) {
      this.setChangeRatio(data['changeRatio']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'humanChangeRatio')) {
      this.setHumanChangeRatio(data['humanChangeRatio']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'timeseries')) {
      this.setTimeseries(data['timeseries']);
    }
  }


  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  setName(value: null | string) {
    this._fields['name'] = value;

    return this;
  }

  get value(): number | null {
    return this._fields['value'] ?? null;
  }
  
  getValue(): number | null {
      return this._fields['value'] ?? null;
  }

  setValue(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['value'] = value;

    return this;
  }

  get previousValue(): number | null {
    return this._fields['previousValue'] ?? null;
  }
  
  getPreviousValue(): number | null {
      return this._fields['previousValue'] ?? null;
  }

  setPreviousValue(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['previousValue'] = value;

    return this;
  }

  get humanValue(): string | null {
    return this._fields['humanValue'] ?? null;
  }
  
  getHumanValue(): string | null {
      return this._fields['humanValue'] ?? null;
  }

  setHumanValue(value: null | string) {
    this._fields['humanValue'] = value;

    return this;
  }

  get changeRatio(): number | null {
    return this._fields['changeRatio'] ?? null;
  }
  
  getChangeRatio(): number | null {
      return this._fields['changeRatio'] ?? null;
  }

  setChangeRatio(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['changeRatio'] = value;

    return this;
  }

  get humanChangeRatio(): string | null {
    return this._fields['humanChangeRatio'] ?? null;
  }
  
  getHumanChangeRatio(): string | null {
      return this._fields['humanChangeRatio'] ?? null;
  }

  setHumanChangeRatio(value: null | string) {
    this._fields['humanChangeRatio'] = value;

    return this;
  }

  get timeseries(): Array<any> | null {
    return this._fields['timeseries'] ?? null;
  }
  
  getTimeseries(): Array<any> | null {
      return this._fields['timeseries'] ?? null;
  }

  setTimeseries(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof DashboardResponseSegmentsTimeseries ? value : new DashboardResponseSegmentsTimeseries(value),
    ) : null;

    this._fields['timeseries'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'previousValue')) {
      data['previousValue'] = this['previousValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'humanValue')) {
      data['humanValue'] = this['humanValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'changeRatio')) {
      data['changeRatio'] = this['changeRatio'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'humanChangeRatio')) {
      data['humanChangeRatio'] = this['humanChangeRatio'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'timeseries')) {
      data['timeseries'] = this['timeseries'] !== null
          ? this._fields['timeseries'].map((dashboardResponseSegmentsTimeseries: DashboardResponseSegmentsTimeseries) => dashboardResponseSegmentsTimeseries.jsonSerialize())
          : null;
    }

    return data;
  }
}

import SchedulingMethodDateInterval from '../models/scheduling-method-date-interval';

export default class GatewayAccountFinancialSettingsRiskReserveSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'filter')) {
      this.setFilter(data['filter']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bips')) {
      this.setBips(data['bips']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'period')) {
      this.setPeriod(data['period']);
    }
  }


  get filter(): string {
    return this._fields['filter'];
  }
  
  getFilter(): string {
      return this._fields['filter'];
  }

  setFilter(value: string) {
    this._fields['filter'] = value;

    return this;
  }

  get bips(): number {
    return this._fields['bips'];
  }
  
  getBips(): number {
      return this._fields['bips'];
  }

  setBips(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['bips'] = value;

    return this;
  }

  get period(): SchedulingMethodDateInterval {
    return this._fields['period'];
  }
  
  getPeriod(): SchedulingMethodDateInterval {
      return this._fields['period'];
  }

  setPeriod(value: SchedulingMethodDateInterval | any) {
    if (!(value instanceof SchedulingMethodDateInterval)) {
      value = new SchedulingMethodDateInterval(value);
    }

    this._fields['period'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filter')) {
      data['filter'] = this['filter'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bips')) {
      data['bips'] = this['bips'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'period')) {
      data['period'] = this['period'].jsonSerialize();
    }

    return data;
  }
}


export default class RiskScoreSimulationJobPeriod {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'startDate')) {
      this.setStartDate(data['startDate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'endDate')) {
      this.setEndDate(data['endDate']);
    }
  }


  get startDate(): Date | null {
    return this._fields['startDate'] ?? null;
  }
  
  getStartDate(): Date | null {
      return this._fields['startDate'] ?? null;
  }

  setStartDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['startDate'] = value;

    return this;
  }

  get endDate(): Date | null {
    return this._fields['endDate'] ?? null;
  }
  
  getEndDate(): Date | null {
      return this._fields['endDate'] ?? null;
  }

  setEndDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['endDate'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'startDate')) {
      data['startDate'] = this['startDate']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'endDate')) {
      data['endDate'] = this['endDate']?.toISOString() ?? null;
    }

    return data;
  }
}

import FutureRenewalsDataPlansCount from '../models/future-renewals-data-plans-count';

export default class FutureRenewalsData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'date')) {
      this.setDate(data['date']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sum')) {
      this.setSum(data['sum']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'plansCount')) {
      this.setPlansCount(data['plansCount']);
    }
  }


  get date(): string | null {
    return this._fields['date'] ?? null;
  }
  
  getDate(): string | null {
      return this._fields['date'] ?? null;
  }

  setDate(value: null | string) {
    this._fields['date'] = value;

    return this;
  }

  get sum(): number | null {
    return this._fields['sum'] ?? null;
  }
  
  getSum(): number | null {
      return this._fields['sum'] ?? null;
  }

  setSum(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['sum'] = value;

    return this;
  }

  get plansCount(): Array<any> | null {
    return this._fields['plansCount'] ?? null;
  }
  
  getPlansCount(): Array<any> | null {
      return this._fields['plansCount'] ?? null;
  }

  setPlansCount(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof FutureRenewalsDataPlansCount ? value : new FutureRenewalsDataPlansCount(value),
    ) : null;

    this._fields['plansCount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'date')) {
      data['date'] = this['date'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sum')) {
      data['sum'] = this['sum'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'plansCount')) {
      data['plansCount'] = this['plansCount'] !== null
          ? this._fields['plansCount'].map((futureRenewalsDataPlansCount: FutureRenewalsDataPlansCount) => futureRenewalsDataPlansCount.jsonSerialize())
          : null;
    }

    return data;
  }
}

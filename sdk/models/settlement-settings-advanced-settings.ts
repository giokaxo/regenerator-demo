import SettlementPeriodFactory from '../factories/settlement-period-factory';
import { SettlementPeriod } from '../models/settlement-period';

export default class SettlementSettingsAdvancedSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'filter')) {
      this.setFilter(data['filter']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementCurrency')) {
      this.setSettlementCurrency(data['settlementCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementPeriod')) {
      this.setSettlementPeriod(data['settlementPeriod']);
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

  get settlementCurrency(): string | null {
    return this._fields['settlementCurrency'] ?? null;
  }
  
  getSettlementCurrency(): string | null {
      return this._fields['settlementCurrency'] ?? null;
  }

  setSettlementCurrency(value: null | string) {
    this._fields['settlementCurrency'] = value;

    return this;
  }

  get settlementPeriod(): SettlementPeriod | null {
    return this._fields['settlementPeriod'] ?? null;
  }
  
  getSettlementPeriod(): SettlementPeriod | null {
      return this._fields['settlementPeriod'] ?? null;
  }

  setSettlementPeriod(value: null | SettlementPeriod | any) {
    if (value !== null && !(value[SettlementPeriod])) {
      value = SettlementPeriodFactory.from(value);
    }

    this._fields['settlementPeriod'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filter')) {
      data['filter'] = this['filter'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementCurrency')) {
      data['settlementCurrency'] = this['settlementCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementPeriod')) {
      data['settlementPeriod'] = this['settlementPeriod']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

import SettlementPeriodFactory from '../factories/settlement-period-factory';
import { SettlementPeriod } from '../models/settlement-period';
import SettlementSettingsAdvancedSettings from '../models/settlement-settings-advanced-settings';

export default class SettlementSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'settlementCurrency')) {
      this.setSettlementCurrency(data['settlementCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settlementPeriod')) {
      this.setSettlementPeriod(data['settlementPeriod']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'advancedSettings')) {
      this.setAdvancedSettings(data['advancedSettings']);
    }
  }


  get settlementCurrency(): string {
    return this._fields['settlementCurrency'];
  }
  
  getSettlementCurrency(): string {
      return this._fields['settlementCurrency'];
  }

  setSettlementCurrency(value: string) {
    this._fields['settlementCurrency'] = value;

    return this;
  }

  get settlementPeriod(): SettlementPeriod {
    return this._fields['settlementPeriod'];
  }
  
  getSettlementPeriod(): SettlementPeriod {
      return this._fields['settlementPeriod'];
  }

  setSettlementPeriod(value: SettlementPeriod | any) {
    if (!(value[SettlementPeriod])) {
      value = SettlementPeriodFactory.from(value);
    }

    this._fields['settlementPeriod'] = value;

    return this;
  }

  get advancedSettings(): Array<any> | null {
    return this._fields['advancedSettings'] ?? null;
  }
  
  getAdvancedSettings(): Array<any> | null {
      return this._fields['advancedSettings'] ?? null;
  }

  setAdvancedSettings(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof SettlementSettingsAdvancedSettings ? value : new SettlementSettingsAdvancedSettings(value),
    ) : null;

    this._fields['advancedSettings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementCurrency')) {
      data['settlementCurrency'] = this['settlementCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementPeriod')) {
      data['settlementPeriod'] = this['settlementPeriod'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'advancedSettings')) {
      data['advancedSettings'] = this['advancedSettings'] !== null
          ? this._fields['advancedSettings'].map((settlementSettingsAdvancedSettings: SettlementSettingsAdvancedSettings) => settlementSettingsAdvancedSettings.jsonSerialize())
          : null;
    }

    return data;
  }
}

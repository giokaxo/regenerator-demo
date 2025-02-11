import SettlementSettings from '../models/settlement-settings';
import GatewayAccountFinancialSettingsRiskReserveSettings from '../models/gateway-account-financial-settings-risk-reserve-settings';

export default class GatewayAccountFinancialSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'settlementSettings')) {
      this.setSettlementSettings(data['settlementSettings']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskReserveSettings')) {
      this.setRiskReserveSettings(data['riskReserveSettings']);
    }
  }


  get settlementSettings(): SettlementSettings {
    return this._fields['settlementSettings'];
  }
  
  getSettlementSettings(): SettlementSettings {
      return this._fields['settlementSettings'];
  }

  setSettlementSettings(value: SettlementSettings | any) {
    if (!(value instanceof SettlementSettings)) {
      value = new SettlementSettings(value);
    }

    this._fields['settlementSettings'] = value;

    return this;
  }

  get riskReserveSettings(): Array<any> | null {
    return this._fields['riskReserveSettings'] ?? null;
  }
  
  getRiskReserveSettings(): Array<any> | null {
      return this._fields['riskReserveSettings'] ?? null;
  }

  setRiskReserveSettings(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof GatewayAccountFinancialSettingsRiskReserveSettings ? value : new GatewayAccountFinancialSettingsRiskReserveSettings(value),
    ) : null;

    this._fields['riskReserveSettings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settlementSettings')) {
      data['settlementSettings'] = this['settlementSettings'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskReserveSettings')) {
      data['riskReserveSettings'] = this['riskReserveSettings'] !== null
          ? this._fields['riskReserveSettings'].map((gatewayAccountFinancialSettingsRiskReserveSettings: GatewayAccountFinancialSettingsRiskReserveSettings) => gatewayAccountFinancialSettingsRiskReserveSettings.jsonSerialize())
          : null;
    }

    return data;
  }
}

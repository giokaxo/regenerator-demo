import DataCashCredentials from '../models/data-cash-credentials';
import DataCashSettings from '../models/data-cash-settings';
import GatewayAccount from '../models/gateway-account';

export default class DataCash extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'DataCash',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): DataCashCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): DataCashCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: DataCashCredentials | any) {
    if (!(value instanceof DataCashCredentials)) {
      value = new DataCashCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): DataCashSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): DataCashSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | DataCashSettings | any) {
    if (value !== null && !(value instanceof DataCashSettings)) {
      value = new DataCashSettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

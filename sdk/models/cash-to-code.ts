import CashToCodeCredentials from '../models/cash-to-code-credentials';
import CashToCodeSettings from '../models/cash-to-code-settings';
import GatewayAccount from '../models/gateway-account';

export default class CashToCode extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CashToCode',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): CashToCodeCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CashToCodeCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CashToCodeCredentials | any) {
    if (!(value instanceof CashToCodeCredentials)) {
      value = new CashToCodeCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): CashToCodeSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): CashToCodeSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | CashToCodeSettings | any) {
    if (value !== null && !(value instanceof CashToCodeSettings)) {
      value = new CashToCodeSettings(value);
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

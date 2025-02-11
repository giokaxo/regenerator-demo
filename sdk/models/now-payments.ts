import NOWPaymentsCredentials from '../models/now-payments-credentials';
import NOWPaymentsSettings from '../models/now-payments-settings';
import GatewayAccount from '../models/gateway-account';

export default class NOWPayments extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'NOWPayments',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): NOWPaymentsCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): NOWPaymentsCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: NOWPaymentsCredentials | any) {
    if (!(value instanceof NOWPaymentsCredentials)) {
      value = new NOWPaymentsCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): NOWPaymentsSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): NOWPaymentsSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | NOWPaymentsSettings | any) {
    if (value !== null && !(value instanceof NOWPaymentsSettings)) {
      value = new NOWPaymentsSettings(value);
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

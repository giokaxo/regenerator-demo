import MtaPayCredentials from '../models/mta-pay-credentials';
import MtaPaySettings from '../models/mta-pay-settings';
import GatewayAccount from '../models/gateway-account';

export default class MtaPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'MtaPay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): MtaPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): MtaPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: MtaPayCredentials | any) {
    if (!(value instanceof MtaPayCredentials)) {
      value = new MtaPayCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): MtaPaySettings {
    return this._fields['settings'];
  }
  
  getSettings(): MtaPaySettings {
      return this._fields['settings'];
  }

  setSettings(value: MtaPaySettings | any) {
    if (!(value instanceof MtaPaySettings)) {
      value = new MtaPaySettings(value);
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
      data['settings'] = this['settings'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

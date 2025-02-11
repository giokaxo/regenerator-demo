import VCreditosCredentials from '../models/v-creditos-credentials';
import VCreditosSettings from '../models/v-creditos-settings';
import GatewayAccount from '../models/gateway-account';

export default class VCreditos extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'VCreditos',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): VCreditosCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): VCreditosCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: VCreditosCredentials | any) {
    if (!(value instanceof VCreditosCredentials)) {
      value = new VCreditosCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): VCreditosSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): VCreditosSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | VCreditosSettings | any) {
    if (value !== null && !(value instanceof VCreditosSettings)) {
      value = new VCreditosSettings(value);
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

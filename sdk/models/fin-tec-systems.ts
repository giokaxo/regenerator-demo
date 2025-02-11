import FinTecSystemsCredentials from '../models/fin-tec-systems-credentials';
import FinTecSystemsSettings from '../models/fin-tec-systems-settings';
import GatewayAccount from '../models/gateway-account';

export default class FinTecSystems extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'FinTecSystems',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): FinTecSystemsCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): FinTecSystemsCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: FinTecSystemsCredentials | any) {
    if (!(value instanceof FinTecSystemsCredentials)) {
      value = new FinTecSystemsCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): FinTecSystemsSettings {
    return this._fields['settings'];
  }
  
  getSettings(): FinTecSystemsSettings {
      return this._fields['settings'];
  }

  setSettings(value: FinTecSystemsSettings | any) {
    if (!(value instanceof FinTecSystemsSettings)) {
      value = new FinTecSystemsSettings(value);
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

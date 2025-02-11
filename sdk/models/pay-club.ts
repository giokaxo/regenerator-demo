import PayClubCredentials from '../models/pay-club-credentials';
import PayClubSettings from '../models/pay-club-settings';
import GatewayAccount from '../models/gateway-account';

export default class PayClub extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PayClub',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): PayClubCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PayClubCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PayClubCredentials | any) {
    if (!(value instanceof PayClubCredentials)) {
      value = new PayClubCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): PayClubSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): PayClubSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | PayClubSettings | any) {
    if (value !== null && !(value instanceof PayClubSettings)) {
      value = new PayClubSettings(value);
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

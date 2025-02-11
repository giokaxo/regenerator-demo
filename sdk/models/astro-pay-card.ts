import AstroPayCardCredentials from '../models/astro-pay-card-credentials';
import AstroPayCardSettings from '../models/astro-pay-card-settings';
import GatewayAccount from '../models/gateway-account';

export default class AstroPayCard extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'AstroPayCard',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): AstroPayCardCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): AstroPayCardCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: AstroPayCardCredentials | any) {
    if (!(value instanceof AstroPayCardCredentials)) {
      value = new AstroPayCardCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): AstroPayCardSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): AstroPayCardSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | AstroPayCardSettings | any) {
    if (value !== null && !(value instanceof AstroPayCardSettings)) {
      value = new AstroPayCardSettings(value);
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

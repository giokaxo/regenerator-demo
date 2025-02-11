import JPMOrbitalCredentials from '../models/jpm-orbital-credentials';
import GatewayAccount from '../models/gateway-account';

export default class JPMOrbital extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'JPMOrbital',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): JPMOrbitalCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): JPMOrbitalCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: JPMOrbitalCredentials | any) {
    if (!(value instanceof JPMOrbitalCredentials)) {
      value = new JPMOrbitalCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

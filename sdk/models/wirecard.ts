import WirecardCredentials from '../models/wirecard-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Wirecard extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Wirecard',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): WirecardCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): WirecardCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: WirecardCredentials | any) {
    if (!(value instanceof WirecardCredentials)) {
      value = new WirecardCredentials(value);
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

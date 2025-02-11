import ForteCredentials from '../models/forte-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Forte extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Forte',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): ForteCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ForteCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ForteCredentials | any) {
    if (!(value instanceof ForteCredentials)) {
      value = new ForteCredentials(value);
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

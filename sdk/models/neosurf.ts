import NeosurfCredentials from '../models/neosurf-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Neosurf extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Neosurf',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): NeosurfCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): NeosurfCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: NeosurfCredentials | any) {
    if (!(value instanceof NeosurfCredentials)) {
      value = new NeosurfCredentials(value);
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

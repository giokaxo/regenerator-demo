import RealexCredentials from '../models/realex-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Realex extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Realex',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): RealexCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): RealexCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: RealexCredentials | any) {
    if (!(value instanceof RealexCredentials)) {
      value = new RealexCredentials(value);
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

import ElavonCredentials from '../models/elavon-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Elavon extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Elavon',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): ElavonCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ElavonCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ElavonCredentials | any) {
    if (!(value instanceof ElavonCredentials)) {
      value = new ElavonCredentials(value);
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

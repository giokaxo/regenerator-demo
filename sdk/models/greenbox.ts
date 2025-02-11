import GreenboxCredentials from '../models/greenbox-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Greenbox extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Greenbox',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): GreenboxCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): GreenboxCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: GreenboxCredentials | any) {
    if (!(value instanceof GreenboxCredentials)) {
      value = new GreenboxCredentials(value);
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

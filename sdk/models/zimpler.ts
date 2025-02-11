import ZimplerCredentials from '../models/zimpler-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Zimpler extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Zimpler',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): ZimplerCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): ZimplerCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: ZimplerCredentials | any) {
    if (!(value instanceof ZimplerCredentials)) {
      value = new ZimplerCredentials(value);
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

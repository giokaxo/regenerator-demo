import DengiCredentials from '../models/dengi-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Dengi extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Dengi',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): DengiCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): DengiCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: DengiCredentials | any) {
    if (!(value instanceof DengiCredentials)) {
      value = new DengiCredentials(value);
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

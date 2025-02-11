import PPROCredentials from '../models/ppro-credentials';
import GatewayAccount from '../models/gateway-account';

export default class PPRO extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PPRO',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PPROCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PPROCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PPROCredentials | any) {
    if (!(value instanceof PPROCredentials)) {
      value = new PPROCredentials(value);
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

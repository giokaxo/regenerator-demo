import EzeebillCredentials from '../models/ezeebill-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Ezeebill extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Ezeebill',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): EzeebillCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EzeebillCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EzeebillCredentials | any) {
    if (!(value instanceof EzeebillCredentials)) {
      value = new EzeebillCredentials(value);
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

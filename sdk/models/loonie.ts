import LoonieCredentials from '../models/loonie-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Loonie extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'loonie',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): LoonieCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): LoonieCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: LoonieCredentials | any) {
    if (!(value instanceof LoonieCredentials)) {
      value = new LoonieCredentials(value);
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

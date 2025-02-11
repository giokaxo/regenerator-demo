import NuaPayCredentials from '../models/nua-pay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class NuaPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'NuaPay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): NuaPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): NuaPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: NuaPayCredentials | any) {
    if (!(value instanceof NuaPayCredentials)) {
      value = new NuaPayCredentials(value);
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

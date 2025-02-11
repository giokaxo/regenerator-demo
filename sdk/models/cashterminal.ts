import CashterminalCredentials from '../models/cashterminal-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Cashterminal extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Cashterminal',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CashterminalCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CashterminalCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CashterminalCredentials | any) {
    if (!(value instanceof CashterminalCredentials)) {
      value = new CashterminalCredentials(value);
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

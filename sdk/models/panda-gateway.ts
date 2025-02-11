import PandaGatewayCredentials from '../models/panda-gateway-credentials';
import GatewayAccount from '../models/gateway-account';

export default class PandaGateway extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PandaGateway',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PandaGatewayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PandaGatewayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PandaGatewayCredentials | any) {
    if (!(value instanceof PandaGatewayCredentials)) {
      value = new PandaGatewayCredentials(value);
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

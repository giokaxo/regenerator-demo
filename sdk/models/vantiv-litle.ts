import VantivLitleCredentials from '../models/vantiv-litle-credentials';
import GatewayAccount from '../models/gateway-account';

export default class VantivLitle extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'VantivLitle',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): VantivLitleCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): VantivLitleCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: VantivLitleCredentials | any) {
    if (!(value instanceof VantivLitleCredentials)) {
      value = new VantivLitleCredentials(value);
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

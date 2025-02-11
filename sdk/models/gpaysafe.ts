import GpaysafeCredentials from '../models/gpaysafe-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Gpaysafe extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Gpaysafe',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): GpaysafeCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): GpaysafeCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: GpaysafeCredentials | any) {
    if (!(value instanceof GpaysafeCredentials)) {
      value = new GpaysafeCredentials(value);
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

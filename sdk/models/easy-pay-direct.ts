import EasyPayDirectCredentials from '../models/easy-pay-direct-credentials';
import GatewayAccount from '../models/gateway-account';

export default class EasyPayDirect extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'EasyPayDirect',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): EasyPayDirectCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EasyPayDirectCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EasyPayDirectCredentials | any) {
    if (!(value instanceof EasyPayDirectCredentials)) {
      value = new EasyPayDirectCredentials(value);
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

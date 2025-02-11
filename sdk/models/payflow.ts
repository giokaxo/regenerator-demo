import PayflowCredentials from '../models/payflow-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Payflow extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Payflow',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PayflowCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PayflowCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PayflowCredentials | any) {
    if (!(value instanceof PayflowCredentials)) {
      value = new PayflowCredentials(value);
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

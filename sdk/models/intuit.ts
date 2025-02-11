import IntuitCredentials from '../models/intuit-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Intuit extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Intuit',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): IntuitCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): IntuitCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: IntuitCredentials | any) {
    if (!(value instanceof IntuitCredentials)) {
      value = new IntuitCredentials(value);
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

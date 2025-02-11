import EutellerCredentials from '../models/euteller-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Euteller extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Euteller',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): EutellerCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EutellerCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EutellerCredentials | any) {
    if (!(value instanceof EutellerCredentials)) {
      value = new EutellerCredentials(value);
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

import EBANXCredentials from '../models/ebanx-credentials';
import GatewayAccount from '../models/gateway-account';

export default class EBANX extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'EBANX',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): EBANXCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EBANXCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EBANXCredentials | any) {
    if (!(value instanceof EBANXCredentials)) {
      value = new EBANXCredentials(value);
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

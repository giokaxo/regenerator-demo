import PayeezyCredentials from '../models/payeezy-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Payeezy extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Payeezy',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PayeezyCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PayeezyCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PayeezyCredentials | any) {
    if (!(value instanceof PayeezyCredentials)) {
      value = new PayeezyCredentials(value);
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

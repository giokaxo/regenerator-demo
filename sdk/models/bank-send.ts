import BankSENDCredentials from '../models/bank-send-credentials';
import GatewayAccount from '../models/gateway-account';

export default class BankSEND extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'BankSEND',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): BankSENDCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): BankSENDCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: BankSENDCredentials | any) {
    if (!(value instanceof BankSENDCredentials)) {
      value = new BankSENDCredentials(value);
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

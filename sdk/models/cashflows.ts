import CashflowsCredentials from '../models/cashflows-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Cashflows extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Cashflows',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CashflowsCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CashflowsCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CashflowsCredentials | any) {
    if (!(value instanceof CashflowsCredentials)) {
      value = new CashflowsCredentials(value);
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

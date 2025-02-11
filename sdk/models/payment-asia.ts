import PaymentAsiaCredentials from '../models/payment-asia-credentials';
import GatewayAccount from '../models/gateway-account';

export default class PaymentAsia extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PaymentAsia',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PaymentAsiaCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PaymentAsiaCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PaymentAsiaCredentials | any) {
    if (!(value instanceof PaymentAsiaCredentials)) {
      value = new PaymentAsiaCredentials(value);
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

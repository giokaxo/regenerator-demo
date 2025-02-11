import CauriPaymentCredentials from '../models/cauri-payment-credentials';
import GatewayAccount from '../models/gateway-account';

export default class CauriPayment extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CauriPayment',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CauriPaymentCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CauriPaymentCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CauriPaymentCredentials | any) {
    if (!(value instanceof CauriPaymentCredentials)) {
      value = new CauriPaymentCredentials(value);
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

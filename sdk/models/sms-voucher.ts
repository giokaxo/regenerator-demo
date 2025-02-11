import SMSVoucherCredentials from '../models/sms-voucher-credentials';
import GatewayAccount from '../models/gateway-account';

export default class SMSVoucher extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'SMSVoucher',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): SMSVoucherCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): SMSVoucherCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: SMSVoucherCredentials | any) {
    if (!(value instanceof SMSVoucherCredentials)) {
      value = new SMSVoucherCredentials(value);
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

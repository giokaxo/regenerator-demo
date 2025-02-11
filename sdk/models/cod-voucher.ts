import CODVoucherCredentials from '../models/cod-voucher-credentials';
import GatewayAccount from '../models/gateway-account';

export default class CODVoucher extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CODVoucher',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CODVoucherCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CODVoucherCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CODVoucherCredentials | any) {
    if (!(value instanceof CODVoucherCredentials)) {
      value = new CODVoucherCredentials(value);
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

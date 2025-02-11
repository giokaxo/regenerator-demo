import BitPayCredentials from '../models/bit-pay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class BitPay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'BitPay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): BitPayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): BitPayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: BitPayCredentials | any) {
    if (!(value instanceof BitPayCredentials)) {
      value = new BitPayCredentials(value);
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

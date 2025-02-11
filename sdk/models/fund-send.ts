import FundSendCredentials from '../models/fund-send-credentials';
import GatewayAccount from '../models/gateway-account';

export default class FundSend extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'FundSend',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): FundSendCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): FundSendCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: FundSendCredentials | any) {
    if (!(value instanceof FundSendCredentials)) {
      value = new FundSendCredentials(value);
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

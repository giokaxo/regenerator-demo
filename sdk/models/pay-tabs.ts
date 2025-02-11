import PayTabsCredentials from '../models/pay-tabs-credentials';
import GatewayAccount from '../models/gateway-account';

export default class PayTabs extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PayTabs',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PayTabsCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PayTabsCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PayTabsCredentials | any) {
    if (!(value instanceof PayTabsCredentials)) {
      value = new PayTabsCredentials(value);
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

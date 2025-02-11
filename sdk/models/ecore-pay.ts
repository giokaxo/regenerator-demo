import EcorePayCredentials from '../models/ecore-pay-credentials';
import GatewayAccount from '../models/gateway-account';

export default class EcorePay extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'EcorePay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): EcorePayCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EcorePayCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EcorePayCredentials | any) {
    if (!(value instanceof EcorePayCredentials)) {
      value = new EcorePayCredentials(value);
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

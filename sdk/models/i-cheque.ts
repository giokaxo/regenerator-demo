import IChequeCredentials from '../models/i-cheque-credentials';
import GatewayAccount from '../models/gateway-account';

export default class ICheque extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'iCheque',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): IChequeCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): IChequeCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: IChequeCredentials | any) {
    if (!(value instanceof IChequeCredentials)) {
      value = new IChequeCredentials(value);
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

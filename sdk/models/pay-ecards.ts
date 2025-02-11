import PayEcardsCredentials from '../models/pay-ecards-credentials';
import GatewayAccount from '../models/gateway-account';

export default class PayEcards extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'PayEcards',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): PayEcardsCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): PayEcardsCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: PayEcardsCredentials | any) {
    if (!(value instanceof PayEcardsCredentials)) {
      value = new PayEcardsCredentials(value);
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

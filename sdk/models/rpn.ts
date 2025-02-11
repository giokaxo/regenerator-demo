import RPNCredentials from '../models/rpn-credentials';
import GatewayAccount from '../models/gateway-account';

export default class RPN extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'RPN',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): RPNCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): RPNCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: RPNCredentials | any) {
    if (!(value instanceof RPNCredentials)) {
      value = new RPNCredentials(value);
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

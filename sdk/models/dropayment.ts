import DropaymentCredentials from '../models/dropayment-credentials';
import GatewayAccount from '../models/gateway-account';

export default class Dropayment extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'Dropayment',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): DropaymentCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): DropaymentCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: DropaymentCredentials | any) {
    if (!(value instanceof DropaymentCredentials)) {
      value = new DropaymentCredentials(value);
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

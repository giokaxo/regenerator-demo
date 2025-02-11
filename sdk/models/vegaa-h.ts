import VegaaHCredentials from '../models/vegaa-h-credentials';
import GatewayAccount from '../models/gateway-account';

export default class VegaaH extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'vegaaH',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): VegaaHCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): VegaaHCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: VegaaHCredentials | any) {
    if (!(value instanceof VegaaHCredentials)) {
      value = new VegaaHCredentials(value);
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

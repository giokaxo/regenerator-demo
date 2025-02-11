import EzyEFTCredentials from '../models/ezy-eft-credentials';
import GatewayAccount from '../models/gateway-account';

export default class EzyEFT extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'ezyEFT',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): EzyEFTCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): EzyEFTCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: EzyEFTCredentials | any) {
    if (!(value instanceof EzyEFTCredentials)) {
      value = new EzyEFTCredentials(value);
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

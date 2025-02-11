import CyberSourceCredentials from '../models/cyber-source-credentials';
import GatewayAccount from '../models/gateway-account';

export default class CyberSource extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'CyberSource',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
  }


  get credentials(): CyberSourceCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): CyberSourceCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: CyberSourceCredentials | any) {
    if (!(value instanceof CyberSourceCredentials)) {
      value = new CyberSourceCredentials(value);
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

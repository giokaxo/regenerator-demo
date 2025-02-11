import InstaDebitCredentials from '../models/insta-debit-credentials';
import InstaDebitSettings from '../models/insta-debit-settings';
import GatewayAccount from '../models/gateway-account';

export default class InstaDebit extends GatewayAccount {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'InstaDebit',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'credentials')) {
      this.setCredentials(data['credentials']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
  }


  get credentials(): InstaDebitCredentials {
    return this._fields['credentials'];
  }
  
  getCredentials(): InstaDebitCredentials {
      return this._fields['credentials'];
  }

  setCredentials(value: InstaDebitCredentials | any) {
    if (!(value instanceof InstaDebitCredentials)) {
      value = new InstaDebitCredentials(value);
    }

    this._fields['credentials'] = value;

    return this;
  }

  get settings(): InstaDebitSettings | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): InstaDebitSettings | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | InstaDebitSettings | any) {
    if (value !== null && !(value instanceof InstaDebitSettings)) {
      value = new InstaDebitSettings(value);
    }

    this._fields['settings'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentials')) {
      data['credentials'] = this['credentials'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings']?.jsonSerialize() ?? null;
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

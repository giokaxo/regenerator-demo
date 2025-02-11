import KycSettingsIdentity from '../models/kyc-settings-identity';
import KycSettingsAddress from '../models/kyc-settings-address';

export default class KycSettings {
  UI_VERSION_1 = '1';

  UI_VERSION_2 = '2';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'identityProof')) {
      this.setIdentityProof(data['identityProof']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'addressProof')) {
      this.setAddressProof(data['addressProof']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'uiVersion')) {
      this.setUiVersion(data['uiVersion']);
    }
  }


  get identityProof(): KycSettingsIdentity | null {
    return this._fields['identityProof'] ?? null;
  }
  
  getIdentityProof(): KycSettingsIdentity | null {
      return this._fields['identityProof'] ?? null;
  }

  setIdentityProof(value: null | KycSettingsIdentity | any) {
    if (value !== null && !(value instanceof KycSettingsIdentity)) {
      value = new KycSettingsIdentity(value);
    }

    this._fields['identityProof'] = value;

    return this;
  }

  get addressProof(): KycSettingsAddress | null {
    return this._fields['addressProof'] ?? null;
  }
  
  getAddressProof(): KycSettingsAddress | null {
      return this._fields['addressProof'] ?? null;
  }

  setAddressProof(value: null | KycSettingsAddress | any) {
    if (value !== null && !(value instanceof KycSettingsAddress)) {
      value = new KycSettingsAddress(value);
    }

    this._fields['addressProof'] = value;

    return this;
  }

  get uiVersion(): string | null {
    return this._fields['uiVersion'] ?? null;
  }
  
  getUiVersion(): string | null {
      return this._fields['uiVersion'] ?? null;
  }

  setUiVersion(value: null | string) {
    this._fields['uiVersion'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'identityProof')) {
      data['identityProof'] = this['identityProof']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'addressProof')) {
      data['addressProof'] = this['addressProof']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'uiVersion')) {
      data['uiVersion'] = this['uiVersion'];
    }

    return data;
  }
}

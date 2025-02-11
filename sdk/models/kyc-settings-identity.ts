import KycSettingsIdentityWeights from '../models/kyc-settings-identity-weights';
import KycSettingsIdentityThresholds from '../models/kyc-settings-identity-thresholds';

export default class KycSettingsIdentity {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'weights')) {
      this.setWeights(data['weights']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'thresholds')) {
      this.setThresholds(data['thresholds']);
    }
  }


  get weights(): KycSettingsIdentityWeights | null {
    return this._fields['weights'] ?? null;
  }
  
  getWeights(): KycSettingsIdentityWeights | null {
      return this._fields['weights'] ?? null;
  }

  setWeights(value: null | KycSettingsIdentityWeights | any) {
    if (value !== null && !(value instanceof KycSettingsIdentityWeights)) {
      value = new KycSettingsIdentityWeights(value);
    }

    this._fields['weights'] = value;

    return this;
  }

  get thresholds(): KycSettingsIdentityThresholds | null {
    return this._fields['thresholds'] ?? null;
  }
  
  getThresholds(): KycSettingsIdentityThresholds | null {
      return this._fields['thresholds'] ?? null;
  }

  setThresholds(value: null | KycSettingsIdentityThresholds | any) {
    if (value !== null && !(value instanceof KycSettingsIdentityThresholds)) {
      value = new KycSettingsIdentityThresholds(value);
    }

    this._fields['thresholds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'weights')) {
      data['weights'] = this['weights']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'thresholds')) {
      data['thresholds'] = this['thresholds']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

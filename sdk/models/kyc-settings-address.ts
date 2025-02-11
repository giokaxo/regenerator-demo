import KycSettingsAddressWeights from '../models/kyc-settings-address-weights';
import KycSettingsAddressThresholds from '../models/kyc-settings-address-thresholds';

export default class KycSettingsAddress {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'weights')) {
      this.setWeights(data['weights']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'thresholds')) {
      this.setThresholds(data['thresholds']);
    }
  }


  get weights(): KycSettingsAddressWeights | null {
    return this._fields['weights'] ?? null;
  }
  
  getWeights(): KycSettingsAddressWeights | null {
      return this._fields['weights'] ?? null;
  }

  setWeights(value: null | KycSettingsAddressWeights | any) {
    if (value !== null && !(value instanceof KycSettingsAddressWeights)) {
      value = new KycSettingsAddressWeights(value);
    }

    this._fields['weights'] = value;

    return this;
  }

  get thresholds(): KycSettingsAddressThresholds | null {
    return this._fields['thresholds'] ?? null;
  }
  
  getThresholds(): KycSettingsAddressThresholds | null {
      return this._fields['thresholds'] ?? null;
  }

  setThresholds(value: null | KycSettingsAddressThresholds | any) {
    if (value !== null && !(value instanceof KycSettingsAddressThresholds)) {
      value = new KycSettingsAddressThresholds(value);
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

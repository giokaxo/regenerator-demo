import AmlCompoundConfidenceAddressMatch from '../models/aml-compound-confidence-address-match';
import AmlCompoundConfidenceAddressMismatch from '../models/aml-compound-confidence-address-mismatch';
import AmlCompoundConfidenceNoAddress from '../models/aml-compound-confidence-no-address';

export default class AmlCompoundConfidence {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'addressMatch')) {
      this.setAddressMatch(data['addressMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'addressMismatch')) {
      this.setAddressMismatch(data['addressMismatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'noAddress')) {
      this.setNoAddress(data['noAddress']);
    }
  }


  get addressMatch(): AmlCompoundConfidenceAddressMatch | null {
    return this._fields['addressMatch'] ?? null;
  }
  
  getAddressMatch(): AmlCompoundConfidenceAddressMatch | null {
      return this._fields['addressMatch'] ?? null;
  }

  setAddressMatch(value: null | AmlCompoundConfidenceAddressMatch | any) {
    if (value !== null && !(value instanceof AmlCompoundConfidenceAddressMatch)) {
      value = new AmlCompoundConfidenceAddressMatch(value);
    }

    this._fields['addressMatch'] = value;

    return this;
  }

  get addressMismatch(): AmlCompoundConfidenceAddressMismatch | null {
    return this._fields['addressMismatch'] ?? null;
  }
  
  getAddressMismatch(): AmlCompoundConfidenceAddressMismatch | null {
      return this._fields['addressMismatch'] ?? null;
  }

  setAddressMismatch(value: null | AmlCompoundConfidenceAddressMismatch | any) {
    if (value !== null && !(value instanceof AmlCompoundConfidenceAddressMismatch)) {
      value = new AmlCompoundConfidenceAddressMismatch(value);
    }

    this._fields['addressMismatch'] = value;

    return this;
  }

  get noAddress(): AmlCompoundConfidenceNoAddress | null {
    return this._fields['noAddress'] ?? null;
  }
  
  getNoAddress(): AmlCompoundConfidenceNoAddress | null {
      return this._fields['noAddress'] ?? null;
  }

  setNoAddress(value: null | AmlCompoundConfidenceNoAddress | any) {
    if (value !== null && !(value instanceof AmlCompoundConfidenceNoAddress)) {
      value = new AmlCompoundConfidenceNoAddress(value);
    }

    this._fields['noAddress'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'addressMatch')) {
      data['addressMatch'] = this['addressMatch']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'addressMismatch')) {
      data['addressMismatch'] = this['addressMismatch']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'noAddress')) {
      data['noAddress'] = this['noAddress']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

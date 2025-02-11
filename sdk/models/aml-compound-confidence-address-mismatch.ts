
export default class AmlCompoundConfidenceAddressMismatch {
  MATCHING_COUNTRY_WEAK = 'weak';

  MATCHING_COUNTRY_MEDIUM = 'medium';

  MATCHING_COUNTRY_STRONG = 'strong';

  MATCHING_COUNTRY_VERY_STRONG = 'very-strong';

  MISMATCHING_COUNTRY_WEAK = 'weak';

  MISMATCHING_COUNTRY_MEDIUM = 'medium';

  MISMATCHING_COUNTRY_STRONG = 'strong';

  MISMATCHING_COUNTRY_VERY_STRONG = 'very-strong';

  NO_COUNTRY_WEAK = 'weak';

  NO_COUNTRY_MEDIUM = 'medium';

  NO_COUNTRY_STRONG = 'strong';

  NO_COUNTRY_VERY_STRONG = 'very-strong';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'matchingCountry')) {
      this.setMatchingCountry(data['matchingCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mismatchingCountry')) {
      this.setMismatchingCountry(data['mismatchingCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'noCountry')) {
      this.setNoCountry(data['noCountry']);
    }
  }


  get matchingCountry(): string | null {
    return this._fields['matchingCountry'] ?? null;
  }
  
  getMatchingCountry(): string | null {
      return this._fields['matchingCountry'] ?? null;
  }

  setMatchingCountry(value: null | string) {
    this._fields['matchingCountry'] = value;

    return this;
  }

  get mismatchingCountry(): string | null {
    return this._fields['mismatchingCountry'] ?? null;
  }
  
  getMismatchingCountry(): string | null {
      return this._fields['mismatchingCountry'] ?? null;
  }

  setMismatchingCountry(value: null | string) {
    this._fields['mismatchingCountry'] = value;

    return this;
  }

  get noCountry(): string | null {
    return this._fields['noCountry'] ?? null;
  }
  
  getNoCountry(): string | null {
      return this._fields['noCountry'] ?? null;
  }

  setNoCountry(value: null | string) {
    this._fields['noCountry'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'matchingCountry')) {
      data['matchingCountry'] = this['matchingCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mismatchingCountry')) {
      data['mismatchingCountry'] = this['mismatchingCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'noCountry')) {
      data['noCountry'] = this['noCountry'];
    }

    return data;
  }
}

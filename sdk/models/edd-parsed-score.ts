import EddScoreDetails from '../models/edd-score-details';

export default class EddParsedScore {
  OCCUPATION_NOT_FOUND = 'not-found';

  OCCUPATION_UNLIKELY = 'unlikely';

  OCCUPATION_UNCLEAR = 'unclear';

  OCCUPATION_PROBABLE = 'probable';

  OCCUPATION_CONFIRMED = 'confirmed';

  ARREST_NOT_FOUND = 'not-found';

  ARREST_UNLIKELY = 'unlikely';

  ARREST_UNCLEAR = 'unclear';

  ARREST_PROBABLE = 'probable';

  ARREST_CONFIRMED = 'confirmed';

  BANKRUPTCY_NOT_FOUND = 'not-found';

  BANKRUPTCY_UNLIKELY = 'unlikely';

  BANKRUPTCY_UNCLEAR = 'unclear';

  BANKRUPTCY_PROBABLE = 'probable';

  BANKRUPTCY_CONFIRMED = 'confirmed';

  FRAUD_NOT_FOUND = 'not-found';

  FRAUD_UNLIKELY = 'unlikely';

  FRAUD_UNCLEAR = 'unclear';

  FRAUD_PROBABLE = 'probable';

  FRAUD_CONFIRMED = 'confirmed';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'occupation')) {
      this.setOccupation(data['occupation']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'arrest')) {
      this.setArrest(data['arrest']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankruptcy')) {
      this.setBankruptcy(data['bankruptcy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fraud')) {
      this.setFraud(data['fraud']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'occupationDetails')) {
      this.setOccupationDetails(data['occupationDetails']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'arrestDetails')) {
      this.setArrestDetails(data['arrestDetails']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bankruptcyDetails')) {
      this.setBankruptcyDetails(data['bankruptcyDetails']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fraudDetails')) {
      this.setFraudDetails(data['fraudDetails']);
    }
  }


  get occupation(): string | null {
    return this._fields['occupation'] ?? null;
  }
  
  getOccupation(): string | null {
      return this._fields['occupation'] ?? null;
  }

  setOccupation(value: null | string) {
    this._fields['occupation'] = value;

    return this;
  }

  get arrest(): string | null {
    return this._fields['arrest'] ?? null;
  }
  
  getArrest(): string | null {
      return this._fields['arrest'] ?? null;
  }

  setArrest(value: null | string) {
    this._fields['arrest'] = value;

    return this;
  }

  get bankruptcy(): string | null {
    return this._fields['bankruptcy'] ?? null;
  }
  
  getBankruptcy(): string | null {
      return this._fields['bankruptcy'] ?? null;
  }

  setBankruptcy(value: null | string) {
    this._fields['bankruptcy'] = value;

    return this;
  }

  get fraud(): string | null {
    return this._fields['fraud'] ?? null;
  }
  
  getFraud(): string | null {
      return this._fields['fraud'] ?? null;
  }

  setFraud(value: null | string) {
    this._fields['fraud'] = value;

    return this;
  }

  get occupationDetails(): EddScoreDetails | null {
    return this._fields['occupationDetails'] ?? null;
  }
  
  getOccupationDetails(): EddScoreDetails | null {
      return this._fields['occupationDetails'] ?? null;
  }

  setOccupationDetails(value: null | EddScoreDetails | any) {
    if (value !== null && !(value instanceof EddScoreDetails)) {
      value = new EddScoreDetails(value);
    }

    this._fields['occupationDetails'] = value;

    return this;
  }

  get arrestDetails(): EddScoreDetails | null {
    return this._fields['arrestDetails'] ?? null;
  }
  
  getArrestDetails(): EddScoreDetails | null {
      return this._fields['arrestDetails'] ?? null;
  }

  setArrestDetails(value: null | EddScoreDetails | any) {
    if (value !== null && !(value instanceof EddScoreDetails)) {
      value = new EddScoreDetails(value);
    }

    this._fields['arrestDetails'] = value;

    return this;
  }

  get bankruptcyDetails(): EddScoreDetails | null {
    return this._fields['bankruptcyDetails'] ?? null;
  }
  
  getBankruptcyDetails(): EddScoreDetails | null {
      return this._fields['bankruptcyDetails'] ?? null;
  }

  setBankruptcyDetails(value: null | EddScoreDetails | any) {
    if (value !== null && !(value instanceof EddScoreDetails)) {
      value = new EddScoreDetails(value);
    }

    this._fields['bankruptcyDetails'] = value;

    return this;
  }

  get fraudDetails(): EddScoreDetails | null {
    return this._fields['fraudDetails'] ?? null;
  }
  
  getFraudDetails(): EddScoreDetails | null {
      return this._fields['fraudDetails'] ?? null;
  }

  setFraudDetails(value: null | EddScoreDetails | any) {
    if (value !== null && !(value instanceof EddScoreDetails)) {
      value = new EddScoreDetails(value);
    }

    this._fields['fraudDetails'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'occupation')) {
      data['occupation'] = this['occupation'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'arrest')) {
      data['arrest'] = this['arrest'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankruptcy')) {
      data['bankruptcy'] = this['bankruptcy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fraud')) {
      data['fraud'] = this['fraud'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'occupationDetails')) {
      data['occupationDetails'] = this['occupationDetails']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'arrestDetails')) {
      data['arrestDetails'] = this['arrestDetails']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bankruptcyDetails')) {
      data['bankruptcyDetails'] = this['bankruptcyDetails']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fraudDetails')) {
      data['fraudDetails'] = this['fraudDetails']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

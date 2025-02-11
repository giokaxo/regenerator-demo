
export default class PatchCustomerEddScoreRequestScore {
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

    return data;
  }
}

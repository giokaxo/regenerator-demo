import CreditFileCommonDecisionData from '../models/credit-file-common-decision-data';

export default class CreditFileMatchesReferenceData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'singleSourceHit')) {
      this.setSingleSourceHit(data['singleSourceHit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dualSourceHit')) {
      this.setDualSourceHit(data['dualSourceHit']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'waterfallProcess')) {
      this.setWaterfallProcess(data['waterfallProcess']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'creditFileCreatedDate')) {
      this.setCreditFileCreatedDate(data['creditFileCreatedDate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'numberOfTradesOnFile')) {
      this.setNumberOfTradesOnFile(data['numberOfTradesOnFile']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'singleDecision')) {
      this.setSingleDecision(data['singleDecision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dualDecision')) {
      this.setDualDecision(data['dualDecision']);
    }
  }


  get singleSourceHit(): string | null {
    return this._fields['singleSourceHit'] ?? null;
  }
  
  getSingleSourceHit(): string | null {
      return this._fields['singleSourceHit'] ?? null;
  }

  private setSingleSourceHit(value: null | string) {
    this._fields['singleSourceHit'] = value;

    return this;
  }

  get dualSourceHit(): string | null {
    return this._fields['dualSourceHit'] ?? null;
  }
  
  getDualSourceHit(): string | null {
      return this._fields['dualSourceHit'] ?? null;
  }

  private setDualSourceHit(value: null | string) {
    this._fields['dualSourceHit'] = value;

    return this;
  }

  get waterfallProcess(): string | null {
    return this._fields['waterfallProcess'] ?? null;
  }
  
  getWaterfallProcess(): string | null {
      return this._fields['waterfallProcess'] ?? null;
  }

  private setWaterfallProcess(value: null | string) {
    this._fields['waterfallProcess'] = value;

    return this;
  }

  get creditFileCreatedDate(): string | null {
    return this._fields['creditFileCreatedDate'] ?? null;
  }
  
  getCreditFileCreatedDate(): string | null {
      return this._fields['creditFileCreatedDate'] ?? null;
  }

  private setCreditFileCreatedDate(value: null | string) {
    this._fields['creditFileCreatedDate'] = value;

    return this;
  }

  get numberOfTradesOnFile(): string | null {
    return this._fields['numberOfTradesOnFile'] ?? null;
  }
  
  getNumberOfTradesOnFile(): string | null {
      return this._fields['numberOfTradesOnFile'] ?? null;
  }

  private setNumberOfTradesOnFile(value: null | string) {
    this._fields['numberOfTradesOnFile'] = value;

    return this;
  }

  get singleDecision(): CreditFileCommonDecisionData | null {
    return this._fields['singleDecision'] ?? null;
  }
  
  getSingleDecision(): CreditFileCommonDecisionData | null {
      return this._fields['singleDecision'] ?? null;
  }

  setSingleDecision(value: null | CreditFileCommonDecisionData | any) {
    if (value !== null && !(value instanceof CreditFileCommonDecisionData)) {
      value = new CreditFileCommonDecisionData(value);
    }

    this._fields['singleDecision'] = value;

    return this;
  }

  get dualDecision(): Array<any> | null {
    return this._fields['dualDecision'] ?? null;
  }
  
  getDualDecision(): Array<any> | null {
      return this._fields['dualDecision'] ?? null;
  }

  setDualDecision(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof CreditFileCommonDecisionData ? value : new CreditFileCommonDecisionData(value),
    ) : null;

    this._fields['dualDecision'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'singleSourceHit')) {
      data['singleSourceHit'] = this['singleSourceHit'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dualSourceHit')) {
      data['dualSourceHit'] = this['dualSourceHit'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'waterfallProcess')) {
      data['waterfallProcess'] = this['waterfallProcess'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'creditFileCreatedDate')) {
      data['creditFileCreatedDate'] = this['creditFileCreatedDate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'numberOfTradesOnFile')) {
      data['numberOfTradesOnFile'] = this['numberOfTradesOnFile'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'singleDecision')) {
      data['singleDecision'] = this['singleDecision']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dualDecision')) {
      data['dualDecision'] = this['dualDecision'] !== null
          ? this._fields['dualDecision'].map((creditFileCommonDecisionData: CreditFileCommonDecisionData) => creditFileCommonDecisionData.jsonSerialize())
          : null;
    }

    return data;
  }
}

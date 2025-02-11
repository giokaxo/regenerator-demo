import CreditMemoTaxItemJurisdictions from '../models/credit-memo-tax-item-jurisdictions';

export default class CreditMemoTaxItem {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rate')) {
      this.setRate(data['rate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stateAmount')) {
      this.setStateAmount(data['stateAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'countyAmount')) {
      this.setCountyAmount(data['countyAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cityAmount')) {
      this.setCityAmount(data['cityAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'specialDistrictAmount')) {
      this.setSpecialDistrictAmount(data['specialDistrictAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stateRate')) {
      this.setStateRate(data['stateRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'countyRate')) {
      this.setCountyRate(data['countyRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cityRate')) {
      this.setCityRate(data['cityRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'specialDistrictRate')) {
      this.setSpecialDistrictRate(data['specialDistrictRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'jurisdictions')) {
      this.setJurisdictions(data['jurisdictions']);
    }
  }


  get amount(): number {
    return this._fields['amount'];
  }
  
  getAmount(): number {
      return this._fields['amount'];
  }

  setAmount(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get description(): string {
    return this._fields['description'];
  }
  
  getDescription(): string {
      return this._fields['description'];
  }

  setDescription(value: string) {
    this._fields['description'] = value;

    return this;
  }

  get rate(): number | null {
    return this._fields['rate'] ?? null;
  }
  
  getRate(): number | null {
      return this._fields['rate'] ?? null;
  }

  setRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['rate'] = value;

    return this;
  }

  get stateAmount(): number | null {
    return this._fields['stateAmount'] ?? null;
  }
  
  getStateAmount(): number | null {
      return this._fields['stateAmount'] ?? null;
  }

  setStateAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['stateAmount'] = value;

    return this;
  }

  get countyAmount(): number | null {
    return this._fields['countyAmount'] ?? null;
  }
  
  getCountyAmount(): number | null {
      return this._fields['countyAmount'] ?? null;
  }

  setCountyAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['countyAmount'] = value;

    return this;
  }

  get cityAmount(): number | null {
    return this._fields['cityAmount'] ?? null;
  }
  
  getCityAmount(): number | null {
      return this._fields['cityAmount'] ?? null;
  }

  setCityAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['cityAmount'] = value;

    return this;
  }

  get specialDistrictAmount(): number | null {
    return this._fields['specialDistrictAmount'] ?? null;
  }
  
  getSpecialDistrictAmount(): number | null {
      return this._fields['specialDistrictAmount'] ?? null;
  }

  setSpecialDistrictAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['specialDistrictAmount'] = value;

    return this;
  }

  get stateRate(): number | null {
    return this._fields['stateRate'] ?? null;
  }
  
  getStateRate(): number | null {
      return this._fields['stateRate'] ?? null;
  }

  setStateRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['stateRate'] = value;

    return this;
  }

  get countyRate(): number | null {
    return this._fields['countyRate'] ?? null;
  }
  
  getCountyRate(): number | null {
      return this._fields['countyRate'] ?? null;
  }

  setCountyRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['countyRate'] = value;

    return this;
  }

  get cityRate(): number | null {
    return this._fields['cityRate'] ?? null;
  }
  
  getCityRate(): number | null {
      return this._fields['cityRate'] ?? null;
  }

  setCityRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['cityRate'] = value;

    return this;
  }

  get specialDistrictRate(): number | null {
    return this._fields['specialDistrictRate'] ?? null;
  }
  
  getSpecialDistrictRate(): number | null {
      return this._fields['specialDistrictRate'] ?? null;
  }

  setSpecialDistrictRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['specialDistrictRate'] = value;

    return this;
  }

  get jurisdictions(): CreditMemoTaxItemJurisdictions | null {
    return this._fields['jurisdictions'] ?? null;
  }
  
  getJurisdictions(): CreditMemoTaxItemJurisdictions | null {
      return this._fields['jurisdictions'] ?? null;
  }

  setJurisdictions(value: null | CreditMemoTaxItemJurisdictions | any) {
    if (value !== null && !(value instanceof CreditMemoTaxItemJurisdictions)) {
      value = new CreditMemoTaxItemJurisdictions(value);
    }

    this._fields['jurisdictions'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rate')) {
      data['rate'] = this['rate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stateAmount')) {
      data['stateAmount'] = this['stateAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'countyAmount')) {
      data['countyAmount'] = this['countyAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cityAmount')) {
      data['cityAmount'] = this['cityAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'specialDistrictAmount')) {
      data['specialDistrictAmount'] = this['specialDistrictAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stateRate')) {
      data['stateRate'] = this['stateRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'countyRate')) {
      data['countyRate'] = this['countyRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cityRate')) {
      data['cityRate'] = this['cityRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'specialDistrictRate')) {
      data['specialDistrictRate'] = this['specialDistrictRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'jurisdictions')) {
      data['jurisdictions'] = this['jurisdictions']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

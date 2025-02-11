
export default class ReportTaxData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'state')) {
      this.setState(data['state']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'county')) {
      this.setCounty(data['county']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'city')) {
      this.setCity(data['city']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stateRate')) {
      this.setStateRate(data['stateRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stateAmount')) {
      this.setStateAmount(data['stateAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'countyRate')) {
      this.setCountyRate(data['countyRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'countyAmount')) {
      this.setCountyAmount(data['countyAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cityRate')) {
      this.setCityRate(data['cityRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cityAmount')) {
      this.setCityAmount(data['cityAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'specialDistrictRate')) {
      this.setSpecialDistrictRate(data['specialDistrictRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'specialDistrictAmount')) {
      this.setSpecialDistrictAmount(data['specialDistrictAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxableSalesAmount')) {
      this.setTaxableSalesAmount(data['taxableSalesAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nontaxableSalesAmount')) {
      this.setNontaxableSalesAmount(data['nontaxableSalesAmount']);
    }
  }


  get country(): string | null {
    return this._fields['country'] ?? null;
  }
  
  getCountry(): string | null {
      return this._fields['country'] ?? null;
  }

  setCountry(value: null | string) {
    this._fields['country'] = value;

    return this;
  }

  get state(): string | null {
    return this._fields['state'] ?? null;
  }
  
  getState(): string | null {
      return this._fields['state'] ?? null;
  }

  setState(value: null | string) {
    this._fields['state'] = value;

    return this;
  }

  get county(): string | null {
    return this._fields['county'] ?? null;
  }
  
  getCounty(): string | null {
      return this._fields['county'] ?? null;
  }

  setCounty(value: null | string) {
    this._fields['county'] = value;

    return this;
  }

  get city(): string | null {
    return this._fields['city'] ?? null;
  }
  
  getCity(): string | null {
      return this._fields['city'] ?? null;
  }

  setCity(value: null | string) {
    this._fields['city'] = value;

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

  get taxableSalesAmount(): number | null {
    return this._fields['taxableSalesAmount'] ?? null;
  }
  
  getTaxableSalesAmount(): number | null {
      return this._fields['taxableSalesAmount'] ?? null;
  }

  setTaxableSalesAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['taxableSalesAmount'] = value;

    return this;
  }

  get nontaxableSalesAmount(): number | null {
    return this._fields['nontaxableSalesAmount'] ?? null;
  }
  
  getNontaxableSalesAmount(): number | null {
      return this._fields['nontaxableSalesAmount'] ?? null;
  }

  setNontaxableSalesAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['nontaxableSalesAmount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'state')) {
      data['state'] = this['state'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'county')) {
      data['county'] = this['county'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'city')) {
      data['city'] = this['city'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stateRate')) {
      data['stateRate'] = this['stateRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stateAmount')) {
      data['stateAmount'] = this['stateAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'countyRate')) {
      data['countyRate'] = this['countyRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'countyAmount')) {
      data['countyAmount'] = this['countyAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cityRate')) {
      data['cityRate'] = this['cityRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cityAmount')) {
      data['cityAmount'] = this['cityAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'specialDistrictRate')) {
      data['specialDistrictRate'] = this['specialDistrictRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'specialDistrictAmount')) {
      data['specialDistrictAmount'] = this['specialDistrictAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxableSalesAmount')) {
      data['taxableSalesAmount'] = this['taxableSalesAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nontaxableSalesAmount')) {
      data['nontaxableSalesAmount'] = this['nontaxableSalesAmount'];
    }

    return data;
  }
}

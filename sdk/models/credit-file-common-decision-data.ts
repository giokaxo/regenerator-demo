
export default class CreditFileCommonDecisionData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'lastNameMatch')) {
      this.setLastNameMatch(data['lastNameMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'firstNameMatch')) {
      this.setFirstNameMatch(data['firstNameMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'civicNumberMatch')) {
      this.setCivicNumberMatch(data['civicNumberMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'streetNameMatch')) {
      this.setStreetNameMatch(data['streetNameMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cityMatch')) {
      this.setCityMatch(data['cityMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'postalCodeMatch')) {
      this.setPostalCodeMatch(data['postalCodeMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'provinceMatch')) {
      this.setProvinceMatch(data['provinceMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dateOfBirthMatch')) {
      this.setDateOfBirthMatch(data['dateOfBirthMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ageOfCreditFileThreeOrMoreYearsOld')) {
      this.setAgeOfCreditFileThreeOrMoreYearsOld(data['ageOfCreditFileThreeOrMoreYearsOld']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'addressAsReported')) {
      this.setAddressAsReported(data['addressAsReported']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nameAsReported')) {
      this.setNameAsReported(data['nameAsReported']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dateOfBirthAsReported')) {
      this.setDateOfBirthAsReported(data['dateOfBirthAsReported']);
    }
  }


  get lastNameMatch(): string | null {
    return this._fields['lastNameMatch'] ?? null;
  }
  
  getLastNameMatch(): string | null {
      return this._fields['lastNameMatch'] ?? null;
  }

  private setLastNameMatch(value: null | string) {
    this._fields['lastNameMatch'] = value;

    return this;
  }

  get firstNameMatch(): string | null {
    return this._fields['firstNameMatch'] ?? null;
  }
  
  getFirstNameMatch(): string | null {
      return this._fields['firstNameMatch'] ?? null;
  }

  private setFirstNameMatch(value: null | string) {
    this._fields['firstNameMatch'] = value;

    return this;
  }

  get civicNumberMatch(): string | null {
    return this._fields['civicNumberMatch'] ?? null;
  }
  
  getCivicNumberMatch(): string | null {
      return this._fields['civicNumberMatch'] ?? null;
  }

  private setCivicNumberMatch(value: null | string) {
    this._fields['civicNumberMatch'] = value;

    return this;
  }

  get streetNameMatch(): string | null {
    return this._fields['streetNameMatch'] ?? null;
  }
  
  getStreetNameMatch(): string | null {
      return this._fields['streetNameMatch'] ?? null;
  }

  private setStreetNameMatch(value: null | string) {
    this._fields['streetNameMatch'] = value;

    return this;
  }

  get cityMatch(): string | null {
    return this._fields['cityMatch'] ?? null;
  }
  
  getCityMatch(): string | null {
      return this._fields['cityMatch'] ?? null;
  }

  private setCityMatch(value: null | string) {
    this._fields['cityMatch'] = value;

    return this;
  }

  get postalCodeMatch(): string | null {
    return this._fields['postalCodeMatch'] ?? null;
  }
  
  getPostalCodeMatch(): string | null {
      return this._fields['postalCodeMatch'] ?? null;
  }

  private setPostalCodeMatch(value: null | string) {
    this._fields['postalCodeMatch'] = value;

    return this;
  }

  get provinceMatch(): string | null {
    return this._fields['provinceMatch'] ?? null;
  }
  
  getProvinceMatch(): string | null {
      return this._fields['provinceMatch'] ?? null;
  }

  private setProvinceMatch(value: null | string) {
    this._fields['provinceMatch'] = value;

    return this;
  }

  get dateOfBirthMatch(): string | null {
    return this._fields['dateOfBirthMatch'] ?? null;
  }
  
  getDateOfBirthMatch(): string | null {
      return this._fields['dateOfBirthMatch'] ?? null;
  }

  private setDateOfBirthMatch(value: null | string) {
    this._fields['dateOfBirthMatch'] = value;

    return this;
  }

  get ageOfCreditFileThreeOrMoreYearsOld(): string | null {
    return this._fields['ageOfCreditFileThreeOrMoreYearsOld'] ?? null;
  }
  
  getAgeOfCreditFileThreeOrMoreYearsOld(): string | null {
      return this._fields['ageOfCreditFileThreeOrMoreYearsOld'] ?? null;
  }

  private setAgeOfCreditFileThreeOrMoreYearsOld(value: null | string) {
    this._fields['ageOfCreditFileThreeOrMoreYearsOld'] = value;

    return this;
  }

  get addressAsReported(): string | null {
    return this._fields['addressAsReported'] ?? null;
  }
  
  getAddressAsReported(): string | null {
      return this._fields['addressAsReported'] ?? null;
  }

  private setAddressAsReported(value: null | string) {
    this._fields['addressAsReported'] = value;

    return this;
  }

  get nameAsReported(): string | null {
    return this._fields['nameAsReported'] ?? null;
  }
  
  getNameAsReported(): string | null {
      return this._fields['nameAsReported'] ?? null;
  }

  private setNameAsReported(value: null | string) {
    this._fields['nameAsReported'] = value;

    return this;
  }

  get dateOfBirthAsReported(): string | null {
    return this._fields['dateOfBirthAsReported'] ?? null;
  }
  
  getDateOfBirthAsReported(): string | null {
      return this._fields['dateOfBirthAsReported'] ?? null;
  }

  private setDateOfBirthAsReported(value: null | string) {
    this._fields['dateOfBirthAsReported'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastNameMatch')) {
      data['lastNameMatch'] = this['lastNameMatch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstNameMatch')) {
      data['firstNameMatch'] = this['firstNameMatch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'civicNumberMatch')) {
      data['civicNumberMatch'] = this['civicNumberMatch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'streetNameMatch')) {
      data['streetNameMatch'] = this['streetNameMatch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cityMatch')) {
      data['cityMatch'] = this['cityMatch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'postalCodeMatch')) {
      data['postalCodeMatch'] = this['postalCodeMatch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'provinceMatch')) {
      data['provinceMatch'] = this['provinceMatch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dateOfBirthMatch')) {
      data['dateOfBirthMatch'] = this['dateOfBirthMatch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ageOfCreditFileThreeOrMoreYearsOld')) {
      data['ageOfCreditFileThreeOrMoreYearsOld'] = this['ageOfCreditFileThreeOrMoreYearsOld'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'addressAsReported')) {
      data['addressAsReported'] = this['addressAsReported'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nameAsReported')) {
      data['nameAsReported'] = this['nameAsReported'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dateOfBirthAsReported')) {
      data['dateOfBirthAsReported'] = this['dateOfBirthAsReported'];
    }

    return data;
  }
}

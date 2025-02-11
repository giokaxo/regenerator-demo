
export default class KycSettingsAddressWeights {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'line1')) {
      this.setLine1(data['line1']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'city')) {
      this.setCity(data['city']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'region')) {
      this.setRegion(data['region']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'postalCode')) {
      this.setPostalCode(data['postalCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'date')) {
      this.setDate(data['date']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'phone')) {
      this.setPhone(data['phone']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'documentSubtype')) {
      this.setDocumentSubtype(data['documentSubtype']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isTampered')) {
      this.setIsTampered(data['isTampered']);
    }
  }


  get firstName(): number | null {
    return this._fields['firstName'] ?? null;
  }
  
  getFirstName(): number | null {
      return this._fields['firstName'] ?? null;
  }

  setFirstName(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['firstName'] = value;

    return this;
  }

  get lastName(): number | null {
    return this._fields['lastName'] ?? null;
  }
  
  getLastName(): number | null {
      return this._fields['lastName'] ?? null;
  }

  setLastName(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['lastName'] = value;

    return this;
  }

  get line1(): number | null {
    return this._fields['line1'] ?? null;
  }
  
  getLine1(): number | null {
      return this._fields['line1'] ?? null;
  }

  setLine1(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['line1'] = value;

    return this;
  }

  get city(): number | null {
    return this._fields['city'] ?? null;
  }
  
  getCity(): number | null {
      return this._fields['city'] ?? null;
  }

  setCity(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['city'] = value;

    return this;
  }

  get region(): number | null {
    return this._fields['region'] ?? null;
  }
  
  getRegion(): number | null {
      return this._fields['region'] ?? null;
  }

  setRegion(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['region'] = value;

    return this;
  }

  get postalCode(): number | null {
    return this._fields['postalCode'] ?? null;
  }
  
  getPostalCode(): number | null {
      return this._fields['postalCode'] ?? null;
  }

  setPostalCode(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['postalCode'] = value;

    return this;
  }

  get date(): number | null {
    return this._fields['date'] ?? null;
  }
  
  getDate(): number | null {
      return this._fields['date'] ?? null;
  }

  setDate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['date'] = value;

    return this;
  }

  get phone(): number | null {
    return this._fields['phone'] ?? null;
  }
  
  getPhone(): number | null {
      return this._fields['phone'] ?? null;
  }

  setPhone(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['phone'] = value;

    return this;
  }

  get documentSubtype(): number | null {
    return this._fields['documentSubtype'] ?? null;
  }
  
  getDocumentSubtype(): number | null {
      return this._fields['documentSubtype'] ?? null;
  }

  setDocumentSubtype(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['documentSubtype'] = value;

    return this;
  }

  get isTampered(): number | null {
    return this._fields['isTampered'] ?? null;
  }
  
  getIsTampered(): number | null {
      return this._fields['isTampered'] ?? null;
  }

  setIsTampered(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['isTampered'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'line1')) {
      data['line1'] = this['line1'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'city')) {
      data['city'] = this['city'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'region')) {
      data['region'] = this['region'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'postalCode')) {
      data['postalCode'] = this['postalCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'date')) {
      data['date'] = this['date'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'phone')) {
      data['phone'] = this['phone'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentSubtype')) {
      data['documentSubtype'] = this['documentSubtype'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isTampered')) {
      data['isTampered'] = this['isTampered'];
    }

    return data;
  }
}


export default class AMLPassport {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'number')) {
      this.setNumber(data['number']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'registrationDate')) {
      this.setRegistrationDate(data['registrationDate']);
    }
  }


  get number(): string | null {
    return this._fields['number'] ?? null;
  }
  
  getNumber(): string | null {
      return this._fields['number'] ?? null;
  }

  private setNumber(value: null | string) {
    this._fields['number'] = value;

    return this;
  }

  get registrationDate(): Date | null {
    return this._fields['registrationDate'] ?? null;
  }
  
  getRegistrationDate(): Date | null {
      return this._fields['registrationDate'] ?? null;
  }

  private setRegistrationDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['registrationDate'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'number')) {
      data['number'] = this['number'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'registrationDate')) {
      data['registrationDate'] = this['registrationDate']?.toISOString().substring(0, 10) ?? null;
    }

    return data;
  }
}

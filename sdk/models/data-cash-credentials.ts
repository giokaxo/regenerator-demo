
export default class DataCashCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'client')) {
      this.setClient(data['client']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'password')) {
      this.setPassword(data['password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reportGroup')) {
      this.setReportGroup(data['reportGroup']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reportUser')) {
      this.setReportUser(data['reportUser']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reportPassword')) {
      this.setReportPassword(data['reportPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'visaPayoutsClient')) {
      this.setVisaPayoutsClient(data['visaPayoutsClient']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'visaPayoutsPassword')) {
      this.setVisaPayoutsPassword(data['visaPayoutsPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'masterCardPayoutsClient')) {
      this.setMasterCardPayoutsClient(data['masterCardPayoutsClient']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'masterCardPayoutsPassword')) {
      this.setMasterCardPayoutsPassword(data['masterCardPayoutsPassword']);
    }
  }


  get client(): string {
    return this._fields['client'];
  }
  
  getClient(): string {
      return this._fields['client'];
  }

  setClient(value: string) {
    this._fields['client'] = value;

    return this;
  }

  get password(): string {
    return this._fields['password'];
  }
  
  getPassword(): string {
      return this._fields['password'];
  }

  setPassword(value: string) {
    this._fields['password'] = value;

    return this;
  }

  get reportGroup(): string | null {
    return this._fields['reportGroup'] ?? null;
  }
  
  getReportGroup(): string | null {
      return this._fields['reportGroup'] ?? null;
  }

  setReportGroup(value: null | string) {
    this._fields['reportGroup'] = value;

    return this;
  }

  get reportUser(): string | null {
    return this._fields['reportUser'] ?? null;
  }
  
  getReportUser(): string | null {
      return this._fields['reportUser'] ?? null;
  }

  setReportUser(value: null | string) {
    this._fields['reportUser'] = value;

    return this;
  }

  get reportPassword(): string | null {
    return this._fields['reportPassword'] ?? null;
  }
  
  getReportPassword(): string | null {
      return this._fields['reportPassword'] ?? null;
  }

  setReportPassword(value: null | string) {
    this._fields['reportPassword'] = value;

    return this;
  }

  get visaPayoutsClient(): string | null {
    return this._fields['visaPayoutsClient'] ?? null;
  }
  
  getVisaPayoutsClient(): string | null {
      return this._fields['visaPayoutsClient'] ?? null;
  }

  setVisaPayoutsClient(value: null | string) {
    this._fields['visaPayoutsClient'] = value;

    return this;
  }

  get visaPayoutsPassword(): string | null {
    return this._fields['visaPayoutsPassword'] ?? null;
  }
  
  getVisaPayoutsPassword(): string | null {
      return this._fields['visaPayoutsPassword'] ?? null;
  }

  setVisaPayoutsPassword(value: null | string) {
    this._fields['visaPayoutsPassword'] = value;

    return this;
  }

  get masterCardPayoutsClient(): string | null {
    return this._fields['masterCardPayoutsClient'] ?? null;
  }
  
  getMasterCardPayoutsClient(): string | null {
      return this._fields['masterCardPayoutsClient'] ?? null;
  }

  setMasterCardPayoutsClient(value: null | string) {
    this._fields['masterCardPayoutsClient'] = value;

    return this;
  }

  get masterCardPayoutsPassword(): string | null {
    return this._fields['masterCardPayoutsPassword'] ?? null;
  }
  
  getMasterCardPayoutsPassword(): string | null {
      return this._fields['masterCardPayoutsPassword'] ?? null;
  }

  setMasterCardPayoutsPassword(value: null | string) {
    this._fields['masterCardPayoutsPassword'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'client')) {
      data['client'] = this['client'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'password')) {
      data['password'] = this['password'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reportGroup')) {
      data['reportGroup'] = this['reportGroup'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reportUser')) {
      data['reportUser'] = this['reportUser'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reportPassword')) {
      data['reportPassword'] = this['reportPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'visaPayoutsClient')) {
      data['visaPayoutsClient'] = this['visaPayoutsClient'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'visaPayoutsPassword')) {
      data['visaPayoutsPassword'] = this['visaPayoutsPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'masterCardPayoutsClient')) {
      data['masterCardPayoutsClient'] = this['masterCardPayoutsClient'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'masterCardPayoutsPassword')) {
      data['masterCardPayoutsPassword'] = this['masterCardPayoutsPassword'];
    }

    return data;
  }
}

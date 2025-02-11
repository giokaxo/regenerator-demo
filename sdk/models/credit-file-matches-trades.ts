
export default class CreditFileMatchesTrades {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountNumber')) {
      this.setAccountNumber(data['accountNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dateOpened')) {
      this.setDateOpened(data['dateOpened']);
    }
  }


  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  setName(value: null | string) {
    this._fields['name'] = value;

    return this;
  }

  get accountNumber(): string | null {
    return this._fields['accountNumber'] ?? null;
  }
  
  getAccountNumber(): string | null {
      return this._fields['accountNumber'] ?? null;
  }

  setAccountNumber(value: null | string) {
    this._fields['accountNumber'] = value;

    return this;
  }

  get dateOpened(): Date | null {
    return this._fields['dateOpened'] ?? null;
  }
  
  getDateOpened(): Date | null {
      return this._fields['dateOpened'] ?? null;
  }

  setDateOpened(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['dateOpened'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountNumber')) {
      data['accountNumber'] = this['accountNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dateOpened')) {
      data['dateOpened'] = this['dateOpened']?.toISOString().substring(0, 10) ?? null;
    }

    return data;
  }
}

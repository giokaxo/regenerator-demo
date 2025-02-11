
export default class CashToCodeSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'baseUrl')) {
      this.setBaseUrl(data['baseUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'skipAmountSelection')) {
      this.setSkipAmountSelection(data['skipAmountSelection']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amounts')) {
      this.setAmounts(data['amounts']);
    }
  }


  get baseUrl(): string | null {
    return this._fields['baseUrl'] ?? null;
  }
  
  getBaseUrl(): string | null {
      return this._fields['baseUrl'] ?? null;
  }

  setBaseUrl(value: null | string) {
    this._fields['baseUrl'] = value;

    return this;
  }

  get skipAmountSelection(): boolean | null {
    return this._fields['skipAmountSelection'] ?? null;
  }
  
  getSkipAmountSelection(): boolean | null {
      return this._fields['skipAmountSelection'] ?? null;
  }

  setSkipAmountSelection(value: null | boolean) {
    this._fields['skipAmountSelection'] = value;

    return this;
  }

  get amounts(): Array<any> | null {
    return this._fields['amounts'] ?? null;
  }
  
  getAmounts(): Array<any> | null {
      return this._fields['amounts'] ?? null;
  }

  setAmounts(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => typeof value === 'string' ? Number(value) : value,
    ) : null;

    this._fields['amounts'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'baseUrl')) {
      data['baseUrl'] = this['baseUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'skipAmountSelection')) {
      data['skipAmountSelection'] = this['skipAmountSelection'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amounts')) {
      data['amounts'] = this['amounts'];
    }

    return data;
  }
}

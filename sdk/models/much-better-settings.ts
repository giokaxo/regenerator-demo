
export default class MuchBetterSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'brandName')) {
      this.setBrandName(data['brandName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasPhoneNumberRequest')) {
      this.setHasPhoneNumberRequest(data['hasPhoneNumberRequest']);
    }
  }


  get brandName(): string | null {
    return this._fields['brandName'] ?? null;
  }
  
  getBrandName(): string | null {
      return this._fields['brandName'] ?? null;
  }

  setBrandName(value: null | string) {
    this._fields['brandName'] = value;

    return this;
  }

  get hasPhoneNumberRequest(): boolean | null {
    return this._fields['hasPhoneNumberRequest'] ?? null;
  }
  
  getHasPhoneNumberRequest(): boolean | null {
      return this._fields['hasPhoneNumberRequest'] ?? null;
  }

  setHasPhoneNumberRequest(value: null | boolean) {
    this._fields['hasPhoneNumberRequest'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'brandName')) {
      data['brandName'] = this['brandName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasPhoneNumberRequest')) {
      data['hasPhoneNumberRequest'] = this['hasPhoneNumberRequest'];
    }

    return data;
  }
}

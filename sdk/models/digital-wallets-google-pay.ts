
export default class DigitalWalletsGooglePay {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'isEnabled')) {
      this.setIsEnabled(data['isEnabled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantOrigin')) {
      this.setMerchantOrigin(data['merchantOrigin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
  }


  get isEnabled(): boolean {
    return this._fields['isEnabled'];
  }
  
  getIsEnabled(): boolean {
      return this._fields['isEnabled'];
  }

  setIsEnabled(value: boolean) {
    this._fields['isEnabled'] = value;

    return this;
  }

  get merchantName(): string | null {
    return this._fields['merchantName'] ?? null;
  }
  
  getMerchantName(): string | null {
      return this._fields['merchantName'] ?? null;
  }

  setMerchantName(value: null | string) {
    this._fields['merchantName'] = value;

    return this;
  }

  get merchantOrigin(): string | null {
    return this._fields['merchantOrigin'] ?? null;
  }
  
  getMerchantOrigin(): string | null {
      return this._fields['merchantOrigin'] ?? null;
  }

  setMerchantOrigin(value: null | string) {
    this._fields['merchantOrigin'] = value;

    return this;
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isEnabled')) {
      data['isEnabled'] = this['isEnabled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantOrigin')) {
      data['merchantOrigin'] = this['merchantOrigin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }

    return data;
  }
}

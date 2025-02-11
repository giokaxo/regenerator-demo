
export default class AstroPayCardSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'oneTouchApi')) {
      this.setOneTouchApi(data['oneTouchApi']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useOneTouchSdk')) {
      this.setUseOneTouchSdk(data['useOneTouchSdk']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantLogoUrl')) {
      this.setMerchantLogoUrl(data['merchantLogoUrl']);
    }
  }


  get oneTouchApi(): boolean | null {
    return this._fields['oneTouchApi'] ?? null;
  }
  
  getOneTouchApi(): boolean | null {
      return this._fields['oneTouchApi'] ?? null;
  }

  setOneTouchApi(value: null | boolean) {
    this._fields['oneTouchApi'] = value;

    return this;
  }

  get useOneTouchSdk(): boolean | null {
    return this._fields['useOneTouchSdk'] ?? null;
  }
  
  getUseOneTouchSdk(): boolean | null {
      return this._fields['useOneTouchSdk'] ?? null;
  }

  setUseOneTouchSdk(value: null | boolean) {
    this._fields['useOneTouchSdk'] = value;

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

  get merchantLogoUrl(): string | null {
    return this._fields['merchantLogoUrl'] ?? null;
  }
  
  getMerchantLogoUrl(): string | null {
      return this._fields['merchantLogoUrl'] ?? null;
  }

  setMerchantLogoUrl(value: null | string) {
    this._fields['merchantLogoUrl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'oneTouchApi')) {
      data['oneTouchApi'] = this['oneTouchApi'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useOneTouchSdk')) {
      data['useOneTouchSdk'] = this['useOneTouchSdk'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantLogoUrl')) {
      data['merchantLogoUrl'] = this['merchantLogoUrl'];
    }

    return data;
  }
}

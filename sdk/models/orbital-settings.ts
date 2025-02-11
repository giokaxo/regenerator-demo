
export default class OrbitalSettings {
  TARGET_CURRENCY_USD = 'USD';

  TARGET_CURRENCY_EUR = 'EUR';

  TARGET_CURRENCY_GBP = 'GBP';

  MAIN_CRYPTO_CURRENCY_ETH = 'ETH';

  MAIN_CRYPTO_CURRENCY_SOL = 'SOL';

  MAIN_CRYPTO_CURRENCY_TRX = 'TRX';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'targetCurrency')) {
      this.setTargetCurrency(data['targetCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mainCryptoCurrency')) {
      this.setMainCryptoCurrency(data['mainCryptoCurrency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'logoImageUrl')) {
      this.setLogoImageUrl(data['logoImageUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productImageUrl')) {
      this.setProductImageUrl(data['productImageUrl']);
    }
  }


  get targetCurrency(): string | null {
    return this._fields['targetCurrency'] ?? null;
  }
  
  getTargetCurrency(): string | null {
      return this._fields['targetCurrency'] ?? null;
  }

  setTargetCurrency(value: null | string) {
    this._fields['targetCurrency'] = value;

    return this;
  }

  get mainCryptoCurrency(): string | null {
    return this._fields['mainCryptoCurrency'] ?? null;
  }
  
  getMainCryptoCurrency(): string | null {
      return this._fields['mainCryptoCurrency'] ?? null;
  }

  setMainCryptoCurrency(value: null | string) {
    this._fields['mainCryptoCurrency'] = value;

    return this;
  }

  get logoImageUrl(): string | null {
    return this._fields['logoImageUrl'] ?? null;
  }
  
  getLogoImageUrl(): string | null {
      return this._fields['logoImageUrl'] ?? null;
  }

  setLogoImageUrl(value: null | string) {
    this._fields['logoImageUrl'] = value;

    return this;
  }

  get productImageUrl(): string | null {
    return this._fields['productImageUrl'] ?? null;
  }
  
  getProductImageUrl(): string | null {
      return this._fields['productImageUrl'] ?? null;
  }

  setProductImageUrl(value: null | string) {
    this._fields['productImageUrl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'targetCurrency')) {
      data['targetCurrency'] = this['targetCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mainCryptoCurrency')) {
      data['mainCryptoCurrency'] = this['mainCryptoCurrency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'logoImageUrl')) {
      data['logoImageUrl'] = this['logoImageUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productImageUrl')) {
      data['productImageUrl'] = this['productImageUrl'];
    }

    return data;
  }
}

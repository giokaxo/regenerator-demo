
export default class PaymentCardTokenPaymentInstrument {
  BRAND_VISA = 'Visa';

  BRAND_MASTER_CARD = 'MasterCard';

  BRAND_AMERICAN_EXPRESS = 'American Express';

  BRAND_DISCOVER = 'Discover';

  BRAND_MAESTRO = 'Maestro';

  BRAND_SOLO = 'Solo';

  BRAND_ELECTRON = 'Electron';

  BRAND_JCB = 'JCB';

  BRAND_VOYAGER = 'Voyager';

  BRAND_DINERS_CLUB = 'Diners Club';

  BRAND_SWITCH = 'Switch';

  BRAND_LASER = 'Laser';

  BRAND_CHINA_UNION_PAY = 'China UnionPay';

  BRAND_ASTRO_PAY_CARD = 'AstroPay Card';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'pan')) {
      this.setPan(data['pan']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cvv')) {
      this.setCvv(data['cvv']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expMonth')) {
      this.setExpMonth(data['expMonth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expYear')) {
      this.setExpYear(data['expYear']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bin')) {
      this.setBin(data['bin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'last4')) {
      this.setLast4(data['last4']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'brand')) {
      this.setBrand(data['brand']);
    }
  }


  get pan(): string | null {
    return this._fields['pan'] ?? null;
  }
  
  getPan(): string | null {
      return this._fields['pan'] ?? null;
  }

  setPan(value: null | string) {
    this._fields['pan'] = value;

    return this;
  }

  get cvv(): string | null {
    return this._fields['cvv'] ?? null;
  }
  
  getCvv(): string | null {
      return this._fields['cvv'] ?? null;
  }

  setCvv(value: null | string) {
    this._fields['cvv'] = value;

    return this;
  }

  get expMonth(): number {
    return this._fields['expMonth'];
  }
  
  getExpMonth(): number {
      return this._fields['expMonth'];
  }

  setExpMonth(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expMonth'] = value;

    return this;
  }

  get expYear(): number {
    return this._fields['expYear'];
  }
  
  getExpYear(): number {
      return this._fields['expYear'];
  }

  setExpYear(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expYear'] = value;

    return this;
  }

  get bin(): string | null {
    return this._fields['bin'] ?? null;
  }
  
  getBin(): string | null {
      return this._fields['bin'] ?? null;
  }

  private setBin(value: null | string) {
    this._fields['bin'] = value;

    return this;
  }

  get last4(): string | null {
    return this._fields['last4'] ?? null;
  }
  
  getLast4(): string | null {
      return this._fields['last4'] ?? null;
  }

  private setLast4(value: null | string) {
    this._fields['last4'] = value;

    return this;
  }

  get brand(): string | null {
    return this._fields['brand'] ?? null;
  }
  
  getBrand(): string | null {
      return this._fields['brand'] ?? null;
  }

  private setBrand(value: null | string) {
    this._fields['brand'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pan')) {
      data['pan'] = this['pan'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cvv')) {
      data['cvv'] = this['cvv'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expMonth')) {
      data['expMonth'] = this['expMonth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expYear')) {
      data['expYear'] = this['expYear'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bin')) {
      data['bin'] = this['bin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'last4')) {
      data['last4'] = this['last4'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'brand')) {
      data['brand'] = this['brand'];
    }

    return data;
  }
}

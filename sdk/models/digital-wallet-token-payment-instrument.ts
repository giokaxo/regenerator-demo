
export default class DigitalWalletTokenPaymentInstrument {
  TYPE_APPLE_PAY = 'Apple Pay';

  TYPE_GOOGLE_PAY = 'Google Pay';

  TYPE_SAMSUNG_PAY = 'Samsung Pay';

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
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'descriptor')) {
      this.setDescriptor(data['descriptor']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'expMonth')) {
      this.setExpMonth(data['expMonth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expYear')) {
      this.setExpYear(data['expYear']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'payload')) {
      this.setPayload(data['payload']);
    }
  }


  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  get amount(): number {
    return this._fields['amount'];
  }
  
  getAmount(): number {
      return this._fields['amount'];
  }

  setAmount(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get currency(): string {
    return this._fields['currency'];
  }
  
  getCurrency(): string {
      return this._fields['currency'];
  }

  setCurrency(value: string) {
    this._fields['currency'] = value;

    return this;
  }

  get descriptor(): string {
    return this._fields['descriptor'];
  }
  
  getDescriptor(): string {
      return this._fields['descriptor'];
  }

  setDescriptor(value: string) {
    this._fields['descriptor'] = value;

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

  get expMonth(): number | null {
    return this._fields['expMonth'] ?? null;
  }
  
  getExpMonth(): number | null {
      return this._fields['expMonth'] ?? null;
  }

  private setExpMonth(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expMonth'] = value;

    return this;
  }

  get expYear(): number | null {
    return this._fields['expYear'] ?? null;
  }
  
  getExpYear(): number | null {
      return this._fields['expYear'] ?? null;
  }

  private setExpYear(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expYear'] = value;

    return this;
  }

  get payload(): Record<string, any> {
    return this._fields['payload'];
  }
  
  getPayload(): Record<string, any> {
      return this._fields['payload'];
  }

  setPayload(value: Record<string, any>) {
    this._fields['payload'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'descriptor')) {
      data['descriptor'] = this['descriptor'];
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expMonth')) {
      data['expMonth'] = this['expMonth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expYear')) {
      data['expYear'] = this['expYear'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'payload')) {
      data['payload'] = this['payload'];
    }

    return data;
  }
}

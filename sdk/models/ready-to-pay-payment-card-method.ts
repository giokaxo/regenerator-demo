import PaymentCardFeatureFactory from '../factories/payment-card-feature-factory';
import { ReadyToPayMethods } from '../models/ready-to-pay-methods';
import { PaymentCardFeature } from '../models/payment-card-feature';

export default class ReadyToPayPaymentCardMethod implements ReadyToPayMethods {
  get [ReadyToPayMethods](): true {
    return true;
  }

  BRANDS_VISA = 'Visa';

  BRANDS_MASTER_CARD = 'MasterCard';

  BRANDS_AMERICAN_EXPRESS = 'American Express';

  BRANDS_DISCOVER = 'Discover';

  BRANDS_MAESTRO = 'Maestro';

  BRANDS_SOLO = 'Solo';

  BRANDS_ELECTRON = 'Electron';

  BRANDS_JCB = 'JCB';

  BRANDS_VOYAGER = 'Voyager';

  BRANDS_DINERS_CLUB = 'Diners Club';

  BRANDS_SWITCH = 'Switch';

  BRANDS_LASER = 'Laser';

  BRANDS_CHINA_UNION_PAY = 'China UnionPay';

  BRANDS_ASTRO_PAY_CARD = 'AstroPay Card';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'feature')) {
      this.setFeature(data['feature']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'brands')) {
      this.setBrands(data['brands']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'filters')) {
      this.setFilters(data['filters']);
    }
  }


  public get method() {
    return 'payment-card';
  }

  public getMethod() {
    return 'payment-card';
  }

  get feature(): PaymentCardFeature | null {
    return this._fields['feature'] ?? null;
  }
  
  getFeature(): PaymentCardFeature | null {
      return this._fields['feature'] ?? null;
  }

  setFeature(value: null | PaymentCardFeature | any) {
    if (value !== null && !(value[PaymentCardFeature])) {
      value = PaymentCardFeatureFactory.from(value);
    }

    this._fields['feature'] = value;

    return this;
  }

  get brands(): Array<any> | null {
    return this._fields['brands'] ?? null;
  }
  
  getBrands(): Array<any> | null {
      return this._fields['brands'] ?? null;
  }

  setBrands(value: null | Array<any>) {
    this._fields['brands'] = value;

    return this;
  }

  get filters(): Array<any> | null {
    return this._fields['filters'] ?? null;
  }
  
  getFilters(): Array<any> | null {
      return this._fields['filters'] ?? null;
  }

  setFilters(value: null | Array<any>) {
    this._fields['filters'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      method: 'payment-card',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'feature')) {
      data['feature'] = this['feature']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'brands')) {
      data['brands'] = this['brands'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filters')) {
      data['filters'] = this['filters'];
    }

    return data;
  }
}

import ReadyToPayPayPalMethodFeatureFactory from '../factories/ready-to-pay-pay-pal-method-feature-factory';
import { ReadyToPayMethods } from '../models/ready-to-pay-methods';
import { ReadyToPayPayPalMethodFeature } from '../models/ready-to-pay-pay-pal-method-feature';

export default class ReadyToPayPayPalMethod implements ReadyToPayMethods {
  get [ReadyToPayMethods](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'feature')) {
      this.setFeature(data['feature']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'filters')) {
      this.setFilters(data['filters']);
    }
  }


  public get method() {
    return 'paypal';
  }

  public getMethod() {
    return 'paypal';
  }

  get feature(): ReadyToPayPayPalMethodFeature | null {
    return this._fields['feature'] ?? null;
  }
  
  getFeature(): ReadyToPayPayPalMethodFeature | null {
      return this._fields['feature'] ?? null;
  }

  setFeature(value: null | ReadyToPayPayPalMethodFeature | any) {
    if (value !== null && !(value[ReadyToPayPayPalMethodFeature])) {
      value = ReadyToPayPayPalMethodFeatureFactory.from(value);
    }

    this._fields['feature'] = value;

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
      method: 'paypal',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'feature')) {
      data['feature'] = this['feature']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filters')) {
      data['filters'] = this['filters'];
    }

    return data;
  }
}

import ReadyToPayAchMethodFeatureFactory from '../factories/ready-to-pay-ach-method-feature-factory';
import { ReadyToPayMethods } from '../models/ready-to-pay-methods';
import { ReadyToPayAchMethodFeature } from '../models/ready-to-pay-ach-method-feature';

export default class ReadyToPayAchMethod implements ReadyToPayMethods {
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
    return 'ach';
  }

  public getMethod() {
    return 'ach';
  }

  get feature(): ReadyToPayAchMethodFeature | null {
    return this._fields['feature'] ?? null;
  }
  
  getFeature(): ReadyToPayAchMethodFeature | null {
      return this._fields['feature'] ?? null;
  }

  setFeature(value: null | ReadyToPayAchMethodFeature | any) {
    if (value !== null && !(value[ReadyToPayAchMethodFeature])) {
      value = ReadyToPayAchMethodFeatureFactory.from(value);
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
      method: 'ach',
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

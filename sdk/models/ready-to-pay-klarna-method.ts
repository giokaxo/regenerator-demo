import ReadyToPayKlarnaMethodFeatureFactory from '../factories/ready-to-pay-klarna-method-feature-factory';
import { ReadyToPayMethods } from '../models/ready-to-pay-methods';
import { ReadyToPayKlarnaMethodFeature } from '../models/ready-to-pay-klarna-method-feature';

export default class ReadyToPayKlarnaMethod implements ReadyToPayMethods {
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
    return 'Klarna';
  }

  public getMethod() {
    return 'Klarna';
  }

  get feature(): ReadyToPayKlarnaMethodFeature | null {
    return this._fields['feature'] ?? null;
  }
  
  getFeature(): ReadyToPayKlarnaMethodFeature | null {
      return this._fields['feature'] ?? null;
  }

  setFeature(value: null | ReadyToPayKlarnaMethodFeature | any) {
    if (value !== null && !(value[ReadyToPayKlarnaMethodFeature])) {
      value = ReadyToPayKlarnaMethodFeatureFactory.from(value);
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
      method: 'Klarna',
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

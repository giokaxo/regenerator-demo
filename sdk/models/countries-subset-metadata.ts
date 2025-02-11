import { CountriesMetadata } from '../models/countries-metadata';

export default class CountriesSubsetMetadata implements CountriesMetadata {
  get [CountriesMetadata](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'values')) {
      this.setValues(data['values']);
    }
  }


  public get mode() {
    return 'subset';
  }

  public getMode() {
    return 'subset';
  }

  get values(): Array<any> {
    return this._fields['values'];
  }
  
  getValues(): Array<any> {
      return this._fields['values'];
  }

  setValues(value: Array<any>) {
    this._fields['values'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      mode: 'subset',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'values')) {
      data['values'] = this['values'];
    }

    return data;
  }
}

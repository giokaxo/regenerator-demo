import { CountriesMetadata } from '../models/countries-metadata';

export default class CountriesUnrestrictedMetadata implements CountriesMetadata {
  get [CountriesMetadata](): true {
    return true;
  }

  MODE_UNKNOWN = 'unknown';

  MODE_ALL = 'all';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'mode')) {
      this.setMode(data['mode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'values')) {
      this.setValues(data['values']);
    }
  }


  get mode(): string {
    return this._fields['mode'];
  }
  
  getMode(): string {
      return this._fields['mode'];
  }

  setMode(value: string) {
    this._fields['mode'] = value;

    return this;
  }

  get values(): Array<any> | null {
    return this._fields['values'] ?? null;
  }
  
  getValues(): Array<any> | null {
      return this._fields['values'] ?? null;
  }

  setValues(value: null | Array<any>) {
    this._fields['values'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mode')) {
      data['mode'] = this['mode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'values')) {
      data['values'] = this['values'];
    }

    return data;
  }
}

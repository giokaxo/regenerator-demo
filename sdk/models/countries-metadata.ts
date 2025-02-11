import CountriesSubsetMetadata from '../models/countries-subset-metadata';
import CountriesUnrestrictedMetadata from '../models/countries-unrestricted-metadata';

export const CountriesMetadata = Symbol('CountriesMetadata');

export interface CountriesMetadata {
  [CountriesMetadata]: true;

  get mode(): string;
  getMode(): string;

  get values(): Array<any> | null;
  getValues(): Array<any> | null;
  setValues(value: Array<any>): this;  jsonSerialize(): Record<string, any>;
}

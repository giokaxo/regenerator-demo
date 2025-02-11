import CountriesSubsetMetadata from '../models/countries-subset-metadata';
import CountriesUnrestrictedMetadata from '../models/countries-unrestricted-metadata';
import { CountriesMetadata } from '../models/countries-metadata';

export default class CountriesMetadataFactory {
  static from(data: any = {}): CountriesMetadata {
    switch(data.mode) {
      case 'subset': return new CountriesSubsetMetadata(data);
      case 'all': return new CountriesUnrestrictedMetadata(data);
      case 'unknown': return new CountriesUnrestrictedMetadata(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

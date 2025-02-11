import CountriesMetadataFactory from '../factories/countries-metadata-factory';
import { CountriesMetadata } from '../models/countries-metadata';
import ResourceLink from '../models/resource-link';

export default class PaymentMethodMetadata {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiName')) {
      this.setApiName(data['apiName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'landscapeLogo')) {
      this.setLandscapeLogo(data['landscapeLogo']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'portraitLogo')) {
      this.setPortraitLogo(data['portraitLogo']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'summary')) {
      this.setSummary(data['summary']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'countries')) {
      this.setCountries(data['countries']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'storefrontEnabled')) {
      this.setStorefrontEnabled(data['storefrontEnabled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get apiName(): string {
    return this._fields['apiName'];
  }
  
  getApiName(): string {
      return this._fields['apiName'];
  }

  setApiName(value: string) {
    this._fields['apiName'] = value;

    return this;
  }

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get landscapeLogo(): string | null {
    return this._fields['landscapeLogo'] ?? null;
  }
  
  getLandscapeLogo(): string | null {
      return this._fields['landscapeLogo'] ?? null;
  }

  setLandscapeLogo(value: null | string) {
    this._fields['landscapeLogo'] = value;

    return this;
  }

  get portraitLogo(): string | null {
    return this._fields['portraitLogo'] ?? null;
  }
  
  getPortraitLogo(): string | null {
      return this._fields['portraitLogo'] ?? null;
  }

  setPortraitLogo(value: null | string) {
    this._fields['portraitLogo'] = value;

    return this;
  }

  get summary(): string {
    return this._fields['summary'];
  }
  
  getSummary(): string {
      return this._fields['summary'];
  }

  setSummary(value: string) {
    this._fields['summary'] = value;

    return this;
  }

  get description(): string {
    return this._fields['description'];
  }
  
  getDescription(): string {
      return this._fields['description'];
  }

  setDescription(value: string) {
    this._fields['description'] = value;

    return this;
  }

  get countries(): CountriesMetadata {
    return this._fields['countries'];
  }
  
  getCountries(): CountriesMetadata {
      return this._fields['countries'];
  }

  setCountries(value: CountriesMetadata | any) {
    if (!(value[CountriesMetadata])) {
      value = CountriesMetadataFactory.from(value);
    }

    this._fields['countries'] = value;

    return this;
  }

  get storefrontEnabled(): boolean | null {
    return this._fields['storefrontEnabled'] ?? null;
  }
  
  getStorefrontEnabled(): boolean | null {
      return this._fields['storefrontEnabled'] ?? null;
  }

  setStorefrontEnabled(value: null | boolean) {
    this._fields['storefrontEnabled'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiName')) {
      data['apiName'] = this['apiName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'landscapeLogo')) {
      data['landscapeLogo'] = this['landscapeLogo'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'portraitLogo')) {
      data['portraitLogo'] = this['portraitLogo'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'summary')) {
      data['summary'] = this['summary'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'countries')) {
      data['countries'] = this['countries'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storefrontEnabled')) {
      data['storefrontEnabled'] = this['storefrontEnabled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

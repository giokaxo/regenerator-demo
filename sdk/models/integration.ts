import IntegrationConfigurations from '../models/integration-configurations';
import ResourceLink from '../models/resource-link';

export default class Integration {
  SERVICE_GOOGLE_SHEETS = 'google-sheets';

  SERVICE_KEAP_INFUSIONSOFT = 'keap-infusionsoft';

  SERVICE_INTUIT_QUICKBOOKS = 'intuit-quickbooks';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'service')) {
      this.setService(data['service']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'count')) {
      this.setCount(data['count']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'configurations')) {
      this.setConfigurations(data['configurations']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get service(): string | null {
    return this._fields['service'] ?? null;
  }
  
  getService(): string | null {
      return this._fields['service'] ?? null;
  }

  private setService(value: null | string) {
    this._fields['service'] = value;

    return this;
  }

  get count(): number | null {
    return this._fields['count'] ?? null;
  }
  
  getCount(): number | null {
      return this._fields['count'] ?? null;
  }

  private setCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['count'] = value;

    return this;
  }

  get configurations(): Array<any> | null {
    return this._fields['configurations'] ?? null;
  }
  
  getConfigurations(): Array<any> | null {
      return this._fields['configurations'] ?? null;
  }

  private setConfigurations(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof IntegrationConfigurations ? value : new IntegrationConfigurations(value),
    ) : null;

    this._fields['configurations'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'service')) {
      data['service'] = this['service'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'count')) {
      data['count'] = this['count'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'configurations')) {
      data['configurations'] = this['configurations'] !== null
          ? this._fields['configurations'].map((integrationConfigurations: IntegrationConfigurations) => integrationConfigurations.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

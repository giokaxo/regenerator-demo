import BillingPortalCustomizationColors from '../models/billing-portal-customization-colors';
import BillingPortalCustomizationLinks from '../models/billing-portal-customization-links';

export default class BillingPortalCustomization {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'logoId')) {
      this.setLogoId(data['logoId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'colors')) {
      this.setColors(data['colors']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'links')) {
      this.setLinks(data['links']);
    }
  }


  get logoId(): string | null {
    return this._fields['logoId'] ?? null;
  }
  
  getLogoId(): string | null {
      return this._fields['logoId'] ?? null;
  }

  setLogoId(value: null | string) {
    this._fields['logoId'] = value;

    return this;
  }

  get colors(): BillingPortalCustomizationColors | null {
    return this._fields['colors'] ?? null;
  }
  
  getColors(): BillingPortalCustomizationColors | null {
      return this._fields['colors'] ?? null;
  }

  setColors(value: null | BillingPortalCustomizationColors | any) {
    if (value !== null && !(value instanceof BillingPortalCustomizationColors)) {
      value = new BillingPortalCustomizationColors(value);
    }

    this._fields['colors'] = value;

    return this;
  }

  get links(): BillingPortalCustomizationLinks | null {
    return this._fields['links'] ?? null;
  }
  
  getLinks(): BillingPortalCustomizationLinks | null {
      return this._fields['links'] ?? null;
  }

  setLinks(value: null | BillingPortalCustomizationLinks | any) {
    if (value !== null && !(value instanceof BillingPortalCustomizationLinks)) {
      value = new BillingPortalCustomizationLinks(value);
    }

    this._fields['links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'logoId')) {
      data['logoId'] = this['logoId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'colors')) {
      data['colors'] = this['colors']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['links'] = this['links']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

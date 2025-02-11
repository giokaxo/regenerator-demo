import CheckoutFormCustomizationColors from '../models/checkout-form-customization-colors';
import CheckoutFormCustomizationLinks from '../models/checkout-form-customization-links';
import CheckoutFormCustomizationTracking from '../models/checkout-form-customization-tracking';

export default class CheckoutFormCustomization {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'logoId')) {
      this.setLogoId(data['logoId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'summary')) {
      this.setSummary(data['summary']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'buttonText')) {
      this.setButtonText(data['buttonText']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'colors')) {
      this.setColors(data['colors']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'links')) {
      this.setLinks(data['links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tracking')) {
      this.setTracking(data['tracking']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requiredAdditionalFields')) {
      this.setRequiredAdditionalFields(data['requiredAdditionalFields']);
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

  get summary(): string | null {
    return this._fields['summary'] ?? null;
  }
  
  getSummary(): string | null {
      return this._fields['summary'] ?? null;
  }

  setSummary(value: null | string) {
    this._fields['summary'] = value;

    return this;
  }

  get buttonText(): string | null {
    return this._fields['buttonText'] ?? null;
  }
  
  getButtonText(): string | null {
      return this._fields['buttonText'] ?? null;
  }

  setButtonText(value: null | string) {
    this._fields['buttonText'] = value;

    return this;
  }

  get colors(): CheckoutFormCustomizationColors | null {
    return this._fields['colors'] ?? null;
  }
  
  getColors(): CheckoutFormCustomizationColors | null {
      return this._fields['colors'] ?? null;
  }

  setColors(value: null | CheckoutFormCustomizationColors | any) {
    if (value !== null && !(value instanceof CheckoutFormCustomizationColors)) {
      value = new CheckoutFormCustomizationColors(value);
    }

    this._fields['colors'] = value;

    return this;
  }

  get links(): CheckoutFormCustomizationLinks | null {
    return this._fields['links'] ?? null;
  }
  
  getLinks(): CheckoutFormCustomizationLinks | null {
      return this._fields['links'] ?? null;
  }

  setLinks(value: null | CheckoutFormCustomizationLinks | any) {
    if (value !== null && !(value instanceof CheckoutFormCustomizationLinks)) {
      value = new CheckoutFormCustomizationLinks(value);
    }

    this._fields['links'] = value;

    return this;
  }

  get tracking(): CheckoutFormCustomizationTracking | null {
    return this._fields['tracking'] ?? null;
  }
  
  getTracking(): CheckoutFormCustomizationTracking | null {
      return this._fields['tracking'] ?? null;
  }

  setTracking(value: null | CheckoutFormCustomizationTracking | any) {
    if (value !== null && !(value instanceof CheckoutFormCustomizationTracking)) {
      value = new CheckoutFormCustomizationTracking(value);
    }

    this._fields['tracking'] = value;

    return this;
  }

  get requiredAdditionalFields(): Array<any> | null {
    return this._fields['requiredAdditionalFields'] ?? null;
  }
  
  getRequiredAdditionalFields(): Array<any> | null {
      return this._fields['requiredAdditionalFields'] ?? null;
  }

  setRequiredAdditionalFields(value: null | Array<any>) {
    this._fields['requiredAdditionalFields'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'logoId')) {
      data['logoId'] = this['logoId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'summary')) {
      data['summary'] = this['summary'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'buttonText')) {
      data['buttonText'] = this['buttonText'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'colors')) {
      data['colors'] = this['colors']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['links'] = this['links']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tracking')) {
      data['tracking'] = this['tracking']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requiredAdditionalFields')) {
      data['requiredAdditionalFields'] = this['requiredAdditionalFields'];
    }

    return data;
  }
}

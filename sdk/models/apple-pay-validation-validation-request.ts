
export default class ApplePayValidationValidationRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'validationUrl')) {
      this.setValidationUrl(data['validationUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'domainName')) {
      this.setDomainName(data['domainName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'displayName')) {
      this.setDisplayName(data['displayName']);
    }
  }


  get validationUrl(): string | null {
    return this._fields['validationUrl'] ?? null;
  }
  
  getValidationUrl(): string | null {
      return this._fields['validationUrl'] ?? null;
  }

  setValidationUrl(value: null | string) {
    this._fields['validationUrl'] = value;

    return this;
  }

  get domainName(): string | null {
    return this._fields['domainName'] ?? null;
  }
  
  getDomainName(): string | null {
      return this._fields['domainName'] ?? null;
  }

  setDomainName(value: null | string) {
    this._fields['domainName'] = value;

    return this;
  }

  get displayName(): string | null {
    return this._fields['displayName'] ?? null;
  }
  
  getDisplayName(): string | null {
      return this._fields['displayName'] ?? null;
  }

  setDisplayName(value: null | string) {
    this._fields['displayName'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'validationUrl')) {
      data['validationUrl'] = this['validationUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'domainName')) {
      data['domainName'] = this['domainName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'displayName')) {
      data['displayName'] = this['displayName'];
    }

    return data;
  }
}

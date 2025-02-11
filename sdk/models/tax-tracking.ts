import ResourceLink from '../models/resource-link';

export default class TaxTracking {
  TAX_SERVICE_TAXJAR = 'taxjar';

  TAX_SERVICE_AVALARA = 'avalara';

  TAX_SERVICE_CREDENTIAL_SOURCE_DEFAULT = 'default';

  TAX_SERVICE_CREDENTIAL_SOURCE_MERCHANT = 'merchant';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'duration')) {
      this.setDuration(data['duration']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'initiatedTime')) {
      this.setInitiatedTime(data['initiatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'request')) {
      this.setRequest(data['request']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'response')) {
      this.setResponse(data['response']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requestHeaders')) {
      this.setRequestHeaders(data['requestHeaders']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'responseHeaders')) {
      this.setResponseHeaders(data['responseHeaders']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'entityId')) {
      this.setEntityId(data['entityId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxService')) {
      this.setTaxService(data['taxService']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxServiceCredentialSource')) {
      this.setTaxServiceCredentialSource(data['taxServiceCredentialSource']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get status(): number | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): number | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['status'] = value;

    return this;
  }

  get duration(): number | null {
    return this._fields['duration'] ?? null;
  }
  
  getDuration(): number | null {
      return this._fields['duration'] ?? null;
  }

  setDuration(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['duration'] = value;

    return this;
  }

  get initiatedTime(): Date | null {
    return this._fields['initiatedTime'] ?? null;
  }
  
  getInitiatedTime(): Date | null {
      return this._fields['initiatedTime'] ?? null;
  }

  private setInitiatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['initiatedTime'] = value;

    return this;
  }

  get url(): string | null {
    return this._fields['url'] ?? null;
  }
  
  getUrl(): string | null {
      return this._fields['url'] ?? null;
  }

  setUrl(value: null | string) {
    this._fields['url'] = value;

    return this;
  }

  get method(): string | null {
    return this._fields['method'] ?? null;
  }
  
  getMethod(): string | null {
      return this._fields['method'] ?? null;
  }

  setMethod(value: null | string) {
    this._fields['method'] = value;

    return this;
  }

  get request(): string | null {
    return this._fields['request'] ?? null;
  }
  
  getRequest(): string | null {
      return this._fields['request'] ?? null;
  }

  setRequest(value: null | string) {
    this._fields['request'] = value;

    return this;
  }

  get response(): string | null {
    return this._fields['response'] ?? null;
  }
  
  getResponse(): string | null {
      return this._fields['response'] ?? null;
  }

  setResponse(value: null | string) {
    this._fields['response'] = value;

    return this;
  }

  get requestHeaders(): Record<string, any> | null {
    return this._fields['requestHeaders'] ?? null;
  }
  
  getRequestHeaders(): Record<string, any> | null {
      return this._fields['requestHeaders'] ?? null;
  }

  setRequestHeaders(value: null | Record<string, any>) {
    this._fields['requestHeaders'] = value;

    return this;
  }

  get responseHeaders(): Record<string, any> | null {
    return this._fields['responseHeaders'] ?? null;
  }
  
  getResponseHeaders(): Record<string, any> | null {
      return this._fields['responseHeaders'] ?? null;
  }

  setResponseHeaders(value: null | Record<string, any>) {
    this._fields['responseHeaders'] = value;

    return this;
  }

  get entityId(): string | null {
    return this._fields['entityId'] ?? null;
  }
  
  getEntityId(): string | null {
      return this._fields['entityId'] ?? null;
  }

  setEntityId(value: null | string) {
    this._fields['entityId'] = value;

    return this;
  }

  get organizationId(): string | null {
    return this._fields['organizationId'] ?? null;
  }
  
  getOrganizationId(): string | null {
      return this._fields['organizationId'] ?? null;
  }

  setOrganizationId(value: null | string) {
    this._fields['organizationId'] = value;

    return this;
  }

  get taxService(): string | null {
    return this._fields['taxService'] ?? null;
  }
  
  getTaxService(): string | null {
      return this._fields['taxService'] ?? null;
  }

  setTaxService(value: null | string) {
    this._fields['taxService'] = value;

    return this;
  }

  get taxServiceCredentialSource(): string | null {
    return this._fields['taxServiceCredentialSource'] ?? null;
  }
  
  getTaxServiceCredentialSource(): string | null {
      return this._fields['taxServiceCredentialSource'] ?? null;
  }

  setTaxServiceCredentialSource(value: null | string) {
    this._fields['taxServiceCredentialSource'] = value;

    return this;
  }

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'duration')) {
      data['duration'] = this['duration'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'initiatedTime')) {
      data['initiatedTime'] = this['initiatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'request')) {
      data['request'] = this['request'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'response')) {
      data['response'] = this['response'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requestHeaders')) {
      data['requestHeaders'] = this['requestHeaders'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'responseHeaders')) {
      data['responseHeaders'] = this['responseHeaders'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'entityId')) {
      data['entityId'] = this['entityId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxService')) {
      data['taxService'] = this['taxService'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxServiceCredentialSource')) {
      data['taxServiceCredentialSource'] = this['taxServiceCredentialSource'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

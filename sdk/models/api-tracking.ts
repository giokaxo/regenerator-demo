import ApiTrackingUser from '../models/api-tracking-user';
import ApiTrackingEmbedded from '../models/api-tracking-embedded';
import ResourceLink from '../models/resource-link';

export default class ApiTracking {
  METHOD_HEAD = 'HEAD';

  METHOD_GET = 'GET';

  METHOD_POST = 'POST';

  METHOD_PUT = 'PUT';

  METHOD_DELETE = 'DELETE';

  METHOD_PATCH = 'PATCH';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'route')) {
      this.setRoute(data['route']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'user')) {
      this.setUser(data['user']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ipAddress')) {
      this.setIpAddress(data['ipAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'relatedResourceIds')) {
      this.setRelatedResourceIds(data['relatedResourceIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'duration')) {
      this.setDuration(data['duration']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
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

  get route(): string | null {
    return this._fields['route'] ?? null;
  }
  
  getRoute(): string | null {
      return this._fields['route'] ?? null;
  }

  setRoute(value: null | string) {
    this._fields['route'] = value;

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

  get user(): ApiTrackingUser | null {
    return this._fields['user'] ?? null;
  }
  
  getUser(): ApiTrackingUser | null {
      return this._fields['user'] ?? null;
  }

  setUser(value: null | ApiTrackingUser | any) {
    if (value !== null && !(value instanceof ApiTrackingUser)) {
      value = new ApiTrackingUser(value);
    }

    this._fields['user'] = value;

    return this;
  }

  get ipAddress(): string | null {
    return this._fields['ipAddress'] ?? null;
  }
  
  getIpAddress(): string | null {
      return this._fields['ipAddress'] ?? null;
  }

  setIpAddress(value: null | string) {
    this._fields['ipAddress'] = value;

    return this;
  }

  get relatedResourceIds(): Array<any> | null {
    return this._fields['relatedResourceIds'] ?? null;
  }
  
  getRelatedResourceIds(): Array<any> | null {
      return this._fields['relatedResourceIds'] ?? null;
  }

  private setRelatedResourceIds(value: null | Array<any>) {
    this._fields['relatedResourceIds'] = value;

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

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

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

  get embedded(): ApiTrackingEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): ApiTrackingEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | ApiTrackingEmbedded | any) {
    if (value !== null && !(value instanceof ApiTrackingEmbedded)) {
      value = new ApiTrackingEmbedded(value);
    }

    this._fields['_embedded'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'route')) {
      data['route'] = this['route'];
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'user')) {
      data['user'] = this['user']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipAddress')) {
      data['ipAddress'] = this['ipAddress'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'relatedResourceIds')) {
      data['relatedResourceIds'] = this['relatedResourceIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'duration')) {
      data['duration'] = this['duration'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

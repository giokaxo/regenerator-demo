
export default class TimelineExtraDataLinks {
  RESOURCE_TYPE_KYC_DOCUMENT = 'kyc-document';

  RESOURCE_TYPE_INVOICE = 'invoice';

  RESOURCE_TYPE_SUBSCRIPTION = 'subscription';

  RESOURCE_TYPE_TRANSACTION = 'transaction';

  RESOURCE_TYPE_EMAIL_MESSAGE = 'email-message';

  RESOURCE_TYPE_DISPUTE = 'dispute';

  RESOURCE_TYPE_COUPON = 'coupon';

  RESOURCE_TYPE_EXTERNAL = 'external';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'resourceType')) {
      this.setResourceType(data['resourceType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'resourceId')) {
      this.setResourceId(data['resourceId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'placeholder')) {
      this.setPlaceholder(data['placeholder']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'externalUrl')) {
      this.setExternalUrl(data['externalUrl']);
    }
  }


  get resourceType(): string | null {
    return this._fields['resourceType'] ?? null;
  }
  
  getResourceType(): string | null {
      return this._fields['resourceType'] ?? null;
  }

  setResourceType(value: null | string) {
    this._fields['resourceType'] = value;

    return this;
  }

  get resourceId(): string | null {
    return this._fields['resourceId'] ?? null;
  }
  
  getResourceId(): string | null {
      return this._fields['resourceId'] ?? null;
  }

  setResourceId(value: null | string) {
    this._fields['resourceId'] = value;

    return this;
  }

  get placeholder(): string | null {
    return this._fields['placeholder'] ?? null;
  }
  
  getPlaceholder(): string | null {
      return this._fields['placeholder'] ?? null;
  }

  setPlaceholder(value: null | string) {
    this._fields['placeholder'] = value;

    return this;
  }

  get externalUrl(): string | null {
    return this._fields['externalUrl'] ?? null;
  }
  
  getExternalUrl(): string | null {
      return this._fields['externalUrl'] ?? null;
  }

  setExternalUrl(value: null | string) {
    this._fields['externalUrl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resourceType')) {
      data['resourceType'] = this['resourceType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'resourceId')) {
      data['resourceId'] = this['resourceId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'placeholder')) {
      data['placeholder'] = this['placeholder'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'externalUrl')) {
      data['externalUrl'] = this['externalUrl'];
    }

    return data;
  }
}

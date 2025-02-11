import ResourceLink from '../models/resource-link';

export default class SubscriptionReactivation {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subscriptionId')) {
      this.setSubscriptionId(data['subscriptionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cancellationId')) {
      this.setCancellationId(data['cancellationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'effectiveTime')) {
      this.setEffectiveTime(data['effectiveTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'renewalTime')) {
      this.setRenewalTime(data['renewalTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentId')) {
      this.setPaymentInstrumentId(data['paymentInstrumentId']);
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
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get subscriptionId(): string {
    return this._fields['subscriptionId'];
  }
  
  getSubscriptionId(): string {
      return this._fields['subscriptionId'];
  }

  setSubscriptionId(value: string) {
    this._fields['subscriptionId'] = value;

    return this;
  }

  get cancellationId(): string | null {
    return this._fields['cancellationId'] ?? null;
  }
  
  getCancellationId(): string | null {
      return this._fields['cancellationId'] ?? null;
  }

  private setCancellationId(value: null | string) {
    this._fields['cancellationId'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

    return this;
  }

  get effectiveTime(): Date | null {
    return this._fields['effectiveTime'] ?? null;
  }
  
  getEffectiveTime(): Date | null {
      return this._fields['effectiveTime'] ?? null;
  }

  setEffectiveTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['effectiveTime'] = value;

    return this;
  }

  get renewalTime(): Date | null {
    return this._fields['renewalTime'] ?? null;
  }
  
  getRenewalTime(): Date | null {
      return this._fields['renewalTime'] ?? null;
  }

  setRenewalTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['renewalTime'] = value;

    return this;
  }

  get paymentInstrumentId(): string | null {
    return this._fields['paymentInstrumentId'] ?? null;
  }
  
  getPaymentInstrumentId(): string | null {
      return this._fields['paymentInstrumentId'] ?? null;
  }

  setPaymentInstrumentId(value: null | string) {
    this._fields['paymentInstrumentId'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subscriptionId')) {
      data['subscriptionId'] = this['subscriptionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cancellationId')) {
      data['cancellationId'] = this['cancellationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'effectiveTime')) {
      data['effectiveTime'] = this['effectiveTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'renewalTime')) {
      data['renewalTime'] = this['renewalTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentId')) {
      data['paymentInstrumentId'] = this['paymentInstrumentId'];
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

    return data;
  }
}

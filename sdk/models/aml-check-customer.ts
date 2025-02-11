import AmlCheckCustomerPrimaryAddress from '../models/aml-check-customer-primary-address';
import Tag from '../models/tag';

export default class AmlCheckCustomer {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'primaryAddress')) {
      this.setPrimaryAddress(data['primaryAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tags')) {
      this.setTags(data['tags']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
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

  get primaryAddress(): AmlCheckCustomerPrimaryAddress | null {
    return this._fields['primaryAddress'] ?? null;
  }
  
  getPrimaryAddress(): AmlCheckCustomerPrimaryAddress | null {
      return this._fields['primaryAddress'] ?? null;
  }

  setPrimaryAddress(value: null | AmlCheckCustomerPrimaryAddress | any) {
    if (value !== null && !(value instanceof AmlCheckCustomerPrimaryAddress)) {
      value = new AmlCheckCustomerPrimaryAddress(value);
    }

    this._fields['primaryAddress'] = value;

    return this;
  }

  get tags(): Array<any> | null {
    return this._fields['tags'] ?? null;
  }
  
  getTags(): Array<any> | null {
      return this._fields['tags'] ?? null;
  }

  setTags(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Tag ? value : new Tag(value),
    ) : null;

    this._fields['tags'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'primaryAddress')) {
      data['primaryAddress'] = this['primaryAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tags')) {
      data['tags'] = this['tags'] !== null
          ? this._fields['tags'].map((tag: Tag) => tag.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }

    return data;
  }
}

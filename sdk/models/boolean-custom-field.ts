import { CustomField } from '../models/custom-field';
import BooleanCustomFieldAdditionalSchema from '../models/boolean-custom-field-additional-schema';
import ResourceLink from '../models/resource-link';

export default class BooleanCustomField implements CustomField {
  get [CustomField](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'additionalSchema')) {
      this.setAdditionalSchema(data['additionalSchema']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  public get type() {
    return 'boolean';
  }

  public getType() {
    return 'boolean';
  }

  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  private setName(value: null | string) {
    this._fields['name'] = value;

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

  get additionalSchema(): BooleanCustomFieldAdditionalSchema | null {
    return this._fields['additionalSchema'] ?? null;
  }
  
  getAdditionalSchema(): BooleanCustomFieldAdditionalSchema | null {
      return this._fields['additionalSchema'] ?? null;
  }

  setAdditionalSchema(value: null | BooleanCustomFieldAdditionalSchema | any) {
    if (value !== null && !(value instanceof BooleanCustomFieldAdditionalSchema)) {
      value = new BooleanCustomFieldAdditionalSchema(value);
    }

    this._fields['additionalSchema'] = value;

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
    const data: Record<string, any> = {
      type: 'boolean',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'additionalSchema')) {
      data['additionalSchema'] = this['additionalSchema']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

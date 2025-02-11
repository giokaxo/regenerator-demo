import ProductRecognition from '../models/product-recognition';
import ResourceLink from '../models/resource-link';

export default class Product {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unitLabel')) {
      this.setUnitLabel(data['unitLabel']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requiresShipping')) {
      this.setRequiresShipping(data['requiresShipping']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'options')) {
      this.setOptions(data['options']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxCategoryId')) {
      this.setTaxCategoryId(data['taxCategoryId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountingCode')) {
      this.setAccountingCode(data['accountingCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recognition')) {
      this.setRecognition(data['recognition']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFields')) {
      this.setCustomFields(data['customFields']);
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

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get unitLabel(): string | null {
    return this._fields['unitLabel'] ?? null;
  }
  
  getUnitLabel(): string | null {
      return this._fields['unitLabel'] ?? null;
  }

  setUnitLabel(value: null | string) {
    this._fields['unitLabel'] = value;

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

  get requiresShipping(): boolean | null {
    return this._fields['requiresShipping'] ?? null;
  }
  
  getRequiresShipping(): boolean | null {
      return this._fields['requiresShipping'] ?? null;
  }

  setRequiresShipping(value: null | boolean) {
    this._fields['requiresShipping'] = value;

    return this;
  }

  get options(): Array<any> | null {
    return this._fields['options'] ?? null;
  }
  
  getOptions(): Array<any> | null {
      return this._fields['options'] ?? null;
  }

  setOptions(value: null | Array<any>) {
    this._fields['options'] = value;

    return this;
  }

  get taxCategoryId(): string | null {
    return this._fields['taxCategoryId'] ?? null;
  }
  
  getTaxCategoryId(): string | null {
      return this._fields['taxCategoryId'] ?? null;
  }

  setTaxCategoryId(value: null | string) {
    this._fields['taxCategoryId'] = value;

    return this;
  }

  get accountingCode(): string | null {
    return this._fields['accountingCode'] ?? null;
  }
  
  getAccountingCode(): string | null {
      return this._fields['accountingCode'] ?? null;
  }

  setAccountingCode(value: null | string) {
    this._fields['accountingCode'] = value;

    return this;
  }

  get recognition(): ProductRecognition | null {
    return this._fields['recognition'] ?? null;
  }
  
  getRecognition(): ProductRecognition | null {
      return this._fields['recognition'] ?? null;
  }

  setRecognition(value: null | ProductRecognition | any) {
    if (value !== null && !(value instanceof ProductRecognition)) {
      value = new ProductRecognition(value);
    }

    this._fields['recognition'] = value;

    return this;
  }

  get customFields(): Record<string, any> | null {
    return this._fields['customFields'] ?? null;
  }
  
  getCustomFields(): Record<string, any> | null {
      return this._fields['customFields'] ?? null;
  }

  setCustomFields(value: null | Record<string, any>) {
    this._fields['customFields'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unitLabel')) {
      data['unitLabel'] = this['unitLabel'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requiresShipping')) {
      data['requiresShipping'] = this['requiresShipping'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'options')) {
      data['options'] = this['options'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxCategoryId')) {
      data['taxCategoryId'] = this['taxCategoryId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountingCode')) {
      data['accountingCode'] = this['accountingCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recognition')) {
      data['recognition'] = this['recognition']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFields')) {
      data['customFields'] = this['customFields'];
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

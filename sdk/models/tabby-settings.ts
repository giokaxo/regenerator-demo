
export default class TabbySettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'category')) {
      this.setCategory(data['category']);
    }
  }


  get category(): string | null {
    return this._fields['category'] ?? null;
  }
  
  getCategory(): string | null {
      return this._fields['category'] ?? null;
  }

  setCategory(value: null | string) {
    this._fields['category'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'category')) {
      data['category'] = this['category'];
    }

    return data;
  }
}

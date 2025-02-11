
export default class OneColumnTimelineTableData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'attribute')) {
      this.setAttribute(data['attribute']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      this.setValue(data['value']);
    }
  }


  get attribute(): string | null {
    return this._fields['attribute'] ?? null;
  }
  
  getAttribute(): string | null {
      return this._fields['attribute'] ?? null;
  }

  setAttribute(value: null | string) {
    this._fields['attribute'] = value;

    return this;
  }

  get value(): string | null {
    return this._fields['value'] ?? null;
  }
  
  getValue(): string | null {
      return this._fields['value'] ?? null;
  }

  setValue(value: null | string) {
    this._fields['value'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'attribute')) {
      data['attribute'] = this['attribute'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'value')) {
      data['value'] = this['value'];
    }

    return data;
  }
}

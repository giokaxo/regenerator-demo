
export default class ThreeColumnsTimelineTableData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'attribute')) {
      this.setAttribute(data['attribute']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'previousValue')) {
      this.setPreviousValue(data['previousValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'newValue')) {
      this.setNewValue(data['newValue']);
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

  get previousValue(): string | null {
    return this._fields['previousValue'] ?? null;
  }
  
  getPreviousValue(): string | null {
      return this._fields['previousValue'] ?? null;
  }

  setPreviousValue(value: null | string) {
    this._fields['previousValue'] = value;

    return this;
  }

  get newValue(): string | null {
    return this._fields['newValue'] ?? null;
  }
  
  getNewValue(): string | null {
      return this._fields['newValue'] ?? null;
  }

  setNewValue(value: null | string) {
    this._fields['newValue'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'attribute')) {
      data['attribute'] = this['attribute'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'previousValue')) {
      data['previousValue'] = this['previousValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'newValue')) {
      data['newValue'] = this['newValue'];
    }

    return data;
  }
}

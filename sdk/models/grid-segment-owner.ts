
export default class GridSegmentOwner {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
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

  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  setName(value: null | string) {
    this._fields['name'] = value;

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

    return data;
  }
}

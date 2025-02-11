
export default class ResourceLink {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'href')) {
      this.setHref(data['href']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rel')) {
      this.setRel(data['rel']);
    }
  }


  get href(): string | null {
    return this._fields['href'] ?? null;
  }
  
  getHref(): string | null {
      return this._fields['href'] ?? null;
  }

  setHref(value: null | string) {
    this._fields['href'] = value;

    return this;
  }

  get rel(): string | null {
    return this._fields['rel'] ?? null;
  }
  
  getRel(): string | null {
      return this._fields['rel'] ?? null;
  }

  setRel(value: null | string) {
    this._fields['rel'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'href')) {
      data['href'] = this['href'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rel')) {
      data['rel'] = this['rel'];
    }

    return data;
  }
}


export default class DataExportArguments {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'filter')) {
      this.setFilter(data['filter']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sort')) {
      this.setSort(data['sort']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'q')) {
      this.setQ(data['q']);
    }
  }


  get filter(): string | null {
    return this._fields['filter'] ?? null;
  }
  
  getFilter(): string | null {
      return this._fields['filter'] ?? null;
  }

  setFilter(value: null | string) {
    this._fields['filter'] = value;

    return this;
  }

  get sort(): string | null {
    return this._fields['sort'] ?? null;
  }
  
  getSort(): string | null {
      return this._fields['sort'] ?? null;
  }

  setSort(value: null | string) {
    this._fields['sort'] = value;

    return this;
  }

  get q(): string | null {
    return this._fields['q'] ?? null;
  }
  
  getQ(): string | null {
      return this._fields['q'] ?? null;
  }

  setQ(value: null | string) {
    this._fields['q'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filter')) {
      data['filter'] = this['filter'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sort')) {
      data['sort'] = this['sort'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'q')) {
      data['q'] = this['q'];
    }

    return data;
  }
}

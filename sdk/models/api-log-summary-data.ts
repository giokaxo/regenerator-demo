
export default class ApiLogSummaryData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'route')) {
      this.setRoute(data['route']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'total')) {
      this.setTotal(data['total']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'get')) {
      this.setGet(data['get']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'post')) {
      this.setPost(data['post']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'put')) {
      this.setPut(data['put']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'patch')) {
      this.setPatch(data['patch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'delete')) {
      this.setDelete(data['delete']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'head')) {
      this.setHead(data['head']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'options')) {
      this.setOptions(data['options']);
    }
  }


  get route(): string | null {
    return this._fields['route'] ?? null;
  }
  
  getRoute(): string | null {
      return this._fields['route'] ?? null;
  }

  setRoute(value: null | string) {
    this._fields['route'] = value;

    return this;
  }

  get total(): number | null {
    return this._fields['total'] ?? null;
  }
  
  getTotal(): number | null {
      return this._fields['total'] ?? null;
  }

  setTotal(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['total'] = value;

    return this;
  }

  get get(): number | null {
    return this._fields['get'] ?? null;
  }
  
  getGet(): number | null {
      return this._fields['get'] ?? null;
  }

  setGet(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['get'] = value;

    return this;
  }

  get post(): number | null {
    return this._fields['post'] ?? null;
  }
  
  getPost(): number | null {
      return this._fields['post'] ?? null;
  }

  setPost(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['post'] = value;

    return this;
  }

  get put(): number | null {
    return this._fields['put'] ?? null;
  }
  
  getPut(): number | null {
      return this._fields['put'] ?? null;
  }

  setPut(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['put'] = value;

    return this;
  }

  get patch(): number | null {
    return this._fields['patch'] ?? null;
  }
  
  getPatch(): number | null {
      return this._fields['patch'] ?? null;
  }

  setPatch(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['patch'] = value;

    return this;
  }

  get delete(): number | null {
    return this._fields['delete'] ?? null;
  }
  
  getDelete(): number | null {
      return this._fields['delete'] ?? null;
  }

  setDelete(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['delete'] = value;

    return this;
  }

  get head(): number | null {
    return this._fields['head'] ?? null;
  }
  
  getHead(): number | null {
      return this._fields['head'] ?? null;
  }

  setHead(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['head'] = value;

    return this;
  }

  get options(): number | null {
    return this._fields['options'] ?? null;
  }
  
  getOptions(): number | null {
      return this._fields['options'] ?? null;
  }

  setOptions(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['options'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'route')) {
      data['route'] = this['route'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'total')) {
      data['total'] = this['total'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'get')) {
      data['get'] = this['get'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'post')) {
      data['post'] = this['post'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'put')) {
      data['put'] = this['put'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'patch')) {
      data['patch'] = this['patch'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'delete')) {
      data['delete'] = this['delete'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'head')) {
      data['head'] = this['head'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'options')) {
      data['options'] = this['options'];
    }

    return data;
  }
}

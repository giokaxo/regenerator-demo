
export default class EddScoreDetails {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'details')) {
      this.setDetails(data['details']);
    }
  }


  get url(): string | null {
    return this._fields['url'] ?? null;
  }
  
  getUrl(): string | null {
      return this._fields['url'] ?? null;
  }

  setUrl(value: null | string) {
    this._fields['url'] = value;

    return this;
  }

  get details(): string | null {
    return this._fields['details'] ?? null;
  }
  
  getDetails(): string | null {
      return this._fields['details'] ?? null;
  }

  setDetails(value: null | string) {
    this._fields['details'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'details')) {
      data['details'] = this['details'];
    }

    return data;
  }
}

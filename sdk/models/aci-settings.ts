
export default class ACISettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }

    return data;
  }
}

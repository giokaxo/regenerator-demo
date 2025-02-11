
export default class AmexVPCSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
  }


  get url(): string {
    return this._fields['url'];
  }
  
  getUrl(): string {
      return this._fields['url'];
  }

  setUrl(value: string) {
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

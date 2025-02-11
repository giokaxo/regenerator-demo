
export default class RuleActionDisplayOtherChoicesChoices {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'langIso')) {
      this.setLangIso(data['langIso']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'content')) {
      this.setContent(data['content']);
    }
  }


  get langIso(): string {
    return this._fields['langIso'];
  }
  
  getLangIso(): string {
      return this._fields['langIso'];
  }

  setLangIso(value: string) {
    this._fields['langIso'] = value;

    return this;
  }

  get content(): string {
    return this._fields['content'];
  }
  
  getContent(): string {
      return this._fields['content'];
  }

  setContent(value: string) {
    this._fields['content'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'langIso')) {
      data['langIso'] = this['langIso'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'content')) {
      data['content'] = this['content'];
    }

    return data;
  }
}

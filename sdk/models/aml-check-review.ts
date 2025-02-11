
export default class AmlCheckReview {
  TAG_CONFIRMED = 'aml-match-confirmed';

  TAG_FALSE_POSITIVE = 'aml-match-false-positive';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'tag')) {
      this.setTag(data['tag']);
    }
  }


  get tag(): string | null {
    return this._fields['tag'] ?? null;
  }
  
  getTag(): string | null {
      return this._fields['tag'] ?? null;
  }

  setTag(value: null | string) {
    this._fields['tag'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tag')) {
      data['tag'] = this['tag'];
    }

    return data;
  }
}

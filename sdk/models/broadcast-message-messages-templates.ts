
export default class BroadcastMessageMessagesTemplates {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'from')) {
      this.setFrom(data['from']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subject')) {
      this.setSubject(data['subject']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'text')) {
      this.setText(data['text']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'html')) {
      this.setHtml(data['html']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'locale')) {
      this.setLocale(data['locale']);
    }
  }


  get from(): string {
    return this._fields['from'];
  }
  
  getFrom(): string {
      return this._fields['from'];
  }

  setFrom(value: string) {
    this._fields['from'] = value;

    return this;
  }

  get subject(): string {
    return this._fields['subject'];
  }
  
  getSubject(): string {
      return this._fields['subject'];
  }

  setSubject(value: string) {
    this._fields['subject'] = value;

    return this;
  }

  get text(): string {
    return this._fields['text'];
  }
  
  getText(): string {
      return this._fields['text'];
  }

  setText(value: string) {
    this._fields['text'] = value;

    return this;
  }

  get html(): string {
    return this._fields['html'];
  }
  
  getHtml(): string {
      return this._fields['html'];
  }

  setHtml(value: string) {
    this._fields['html'] = value;

    return this;
  }

  get locale(): string {
    return this._fields['locale'];
  }
  
  getLocale(): string {
      return this._fields['locale'];
  }

  setLocale(value: string) {
    this._fields['locale'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'from')) {
      data['from'] = this['from'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subject')) {
      data['subject'] = this['subject'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'text')) {
      data['text'] = this['text'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'html')) {
      data['html'] = this['html'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'locale')) {
      data['locale'] = this['locale'];
    }

    return data;
  }
}

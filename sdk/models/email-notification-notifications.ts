
export default class EmailNotificationNotifications {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'labels')) {
      this.setLabels(data['labels']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'title')) {
      this.setTitle(data['title']);
    }
  }


  get labels(): Array<any> | null {
    return this._fields['labels'] ?? null;
  }
  
  getLabels(): Array<any> | null {
      return this._fields['labels'] ?? null;
  }

  setLabels(value: null | Array<any>) {
    this._fields['labels'] = value;

    return this;
  }

  get title(): string | null {
    return this._fields['title'] ?? null;
  }
  
  getTitle(): string | null {
      return this._fields['title'] ?? null;
  }

  setTitle(value: null | string) {
    this._fields['title'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'labels')) {
      data['labels'] = this['labels'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'title')) {
      data['title'] = this['title'];
    }

    return data;
  }
}


export default class TimelineExtraDataAuthor {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'userFullName')) {
      this.setUserFullName(data['userFullName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'userId')) {
      this.setUserId(data['userId']);
    }
  }


  get userFullName(): string | null {
    return this._fields['userFullName'] ?? null;
  }
  
  getUserFullName(): string | null {
      return this._fields['userFullName'] ?? null;
  }

  setUserFullName(value: null | string) {
    this._fields['userFullName'] = value;

    return this;
  }

  get userId(): string | null {
    return this._fields['userId'] ?? null;
  }
  
  getUserId(): string | null {
      return this._fields['userId'] ?? null;
  }

  setUserId(value: null | string) {
    this._fields['userId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userFullName')) {
      data['userFullName'] = this['userFullName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userId')) {
      data['userId'] = this['userId'];
    }

    return data;
  }
}

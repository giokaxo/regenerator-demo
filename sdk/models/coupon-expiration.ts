
export default class CouponExpiration {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'expiredTime')) {
      this.setExpiredTime(data['expiredTime']);
    }
  }


  get expiredTime(): Date {
    return this._fields['expiredTime'];
  }
  
  getExpiredTime(): Date {
      return this._fields['expiredTime'];
  }

  setExpiredTime(value: Date | string) {
    if (!(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expiredTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expiredTime')) {
      data['expiredTime'] = this['expiredTime'].toISOString();
    }

    return data;
  }
}

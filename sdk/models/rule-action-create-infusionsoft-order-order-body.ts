
export default class RuleActionCreateInfusionsoftOrderOrderBody {
  ORDER_TYPE_OFFLINE = 'Offline';

  ORDER_TYPE_ONLINE = 'Online';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'order_date')) {
      this.setOrderDate(data['order_date']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'order_title')) {
      this.setOrderTitle(data['order_title']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'order_type')) {
      this.setOrderType(data['order_type']);
    }
  }


  get orderDate(): string {
    return this._fields['order_date'];
  }
  
  getOrderDate(): string {
      return this._fields['order_date'];
  }

  setOrderDate(value: string) {
    this._fields['order_date'] = value;

    return this;
  }

  get orderTitle(): string {
    return this._fields['order_title'];
  }
  
  getOrderTitle(): string {
      return this._fields['order_title'];
  }

  setOrderTitle(value: string) {
    this._fields['order_title'] = value;

    return this;
  }

  get orderType(): string {
    return this._fields['order_type'];
  }
  
  getOrderType(): string {
      return this._fields['order_type'];
  }

  setOrderType(value: string) {
    this._fields['order_type'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderDate')) {
      data['order_date'] = this['orderDate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderTitle')) {
      data['order_title'] = this['orderTitle'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderType')) {
      data['order_type'] = this['orderType'];
    }

    return data;
  }
}

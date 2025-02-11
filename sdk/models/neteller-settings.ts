
export default class NetellerSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'populateCustomerEmail')) {
      this.setPopulateCustomerEmail(data['populateCustomerEmail']);
    }
  }


  get populateCustomerEmail(): boolean | null {
    return this._fields['populateCustomerEmail'] ?? null;
  }
  
  getPopulateCustomerEmail(): boolean | null {
      return this._fields['populateCustomerEmail'] ?? null;
  }

  setPopulateCustomerEmail(value: null | boolean) {
    this._fields['populateCustomerEmail'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'populateCustomerEmail')) {
      data['populateCustomerEmail'] = this['populateCustomerEmail'];
    }

    return data;
  }
}

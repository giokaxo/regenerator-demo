
export default class DeleteTagCustomerCollectionRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customerIds')) {
      this.setCustomerIds(data['customerIds']);
    }
  }


  get customerIds(): Array<any> {
    return this._fields['customerIds'];
  }
  
  getCustomerIds(): Array<any> {
      return this._fields['customerIds'];
  }

  setCustomerIds(value: Array<any>) {
    this._fields['customerIds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerIds')) {
      data['customerIds'] = this['customerIds'];
    }

    return data;
  }
}

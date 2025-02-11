
export default class DeleteTagAmlCheckCollectionRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'amlCheckIds')) {
      this.setAmlCheckIds(data['amlCheckIds']);
    }
  }


  get amlCheckIds(): Array<any> {
    return this._fields['amlCheckIds'];
  }
  
  getAmlCheckIds(): Array<any> {
      return this._fields['amlCheckIds'];
  }

  setAmlCheckIds(value: Array<any>) {
    this._fields['amlCheckIds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amlCheckIds')) {
      data['amlCheckIds'] = this['amlCheckIds'];
    }

    return data;
  }
}

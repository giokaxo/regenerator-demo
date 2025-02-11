
export default class DeleteTagKycDocumentCollectionRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'kycDocumentIds')) {
      this.setKycDocumentIds(data['kycDocumentIds']);
    }
  }


  get kycDocumentIds(): Array<any> {
    return this._fields['kycDocumentIds'];
  }
  
  getKycDocumentIds(): Array<any> {
      return this._fields['kycDocumentIds'];
  }

  setKycDocumentIds(value: Array<any>) {
    this._fields['kycDocumentIds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'kycDocumentIds')) {
      data['kycDocumentIds'] = this['kycDocumentIds'];
    }

    return data;
  }
}

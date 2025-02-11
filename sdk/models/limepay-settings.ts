
export default class LimepaySettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'storeDocumentId')) {
      this.setStoreDocumentId(data['storeDocumentId']);
    }
  }


  get storeDocumentId(): boolean | null {
    return this._fields['storeDocumentId'] ?? null;
  }
  
  getStoreDocumentId(): boolean | null {
      return this._fields['storeDocumentId'] ?? null;
  }

  setStoreDocumentId(value: null | boolean) {
    this._fields['storeDocumentId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'storeDocumentId')) {
      data['storeDocumentId'] = this['storeDocumentId'];
    }

    return data;
  }
}

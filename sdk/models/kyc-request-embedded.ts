import KycDocumentFactory from '../factories/kyc-document-factory';
import { KycDocument } from '../models/kyc-document';

export default class KycRequestEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'documents')) {
      this.setDocuments(data['documents']);
    }
  }


  get documents(): Array<any> | null {
    return this._fields['documents'] ?? null;
  }
  
  getDocuments(): Array<any> | null {
      return this._fields['documents'] ?? null;
  }

  setDocuments(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value[KycDocument] ? value : KycDocumentFactory.from(value),
    ) : null;

    this._fields['documents'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documents')) {
      data['documents'] = this['documents'] !== null
          ? this._fields['documents'].map((kycDocument: KycDocument) => kycDocument.jsonSerialize())
          : null;
    }

    return data;
  }
}

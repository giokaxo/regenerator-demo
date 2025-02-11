
export default class QuoteCreateOrderSignature {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'showWrittenSignatureLines')) {
      this.setShowWrittenSignatureLines(data['showWrittenSignatureLines']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'organizationPrintedName')) {
      this.setOrganizationPrintedName(data['organizationPrintedName']);
    }
  }


  get showWrittenSignatureLines(): boolean | null {
    return this._fields['showWrittenSignatureLines'] ?? null;
  }
  
  getShowWrittenSignatureLines(): boolean | null {
      return this._fields['showWrittenSignatureLines'] ?? null;
  }

  setShowWrittenSignatureLines(value: null | boolean) {
    this._fields['showWrittenSignatureLines'] = value;

    return this;
  }

  get organizationPrintedName(): string | null {
    return this._fields['organizationPrintedName'] ?? null;
  }
  
  getOrganizationPrintedName(): string | null {
      return this._fields['organizationPrintedName'] ?? null;
  }

  setOrganizationPrintedName(value: null | string) {
    this._fields['organizationPrintedName'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'showWrittenSignatureLines')) {
      data['showWrittenSignatureLines'] = this['showWrittenSignatureLines'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationPrintedName')) {
      data['organizationPrintedName'] = this['organizationPrintedName'];
    }

    return data;
  }
}

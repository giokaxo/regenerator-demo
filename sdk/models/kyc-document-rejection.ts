
export default class KycDocumentRejection {
  TYPE_DOCUMENT_UNREADABLE = 'document-unreadable';

  TYPE_DOCUMENT_EXPIRED = 'document-expired';

  TYPE_DOCUMENT_NOT_MATCHING = 'document-not-matching';

  TYPE_DOCUMENT_DUPLICATE = 'document-duplicate';

  TYPE_DOCUMENT_INVALID = 'document-invalid';

  TYPE_DOCUMENT_NOT_OPEN = 'document-not-open';

  TYPE_UNDERAGE_PERSON = 'underage-person';

  TYPE_THIRD_PARTY_OR_MISMATCH = 'third-party-or-mismatch';

  TYPE_EXPIRATION_DATE_MISSING = 'expiration-date-missing';

  TYPE_ISSUE_DATE_MISSING = 'issue-date-missing';

  TYPE_DOB_MISMATCH = 'dob-mismatch';

  TYPE_NAME_MISMATCH = 'name-mismatch';

  TYPE_CRITICAL_INFO_MISSING = 'critical-info-missing';

  TYPE_OLD_ADDRESS_ON_ID = 'old-address-on-id';

  TYPE_TAMPERED_DOCUMENT = 'tampered-document';

  TYPE_OTHER = 'other';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'message')) {
      this.setMessage(data['message']);
    }
  }


  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get message(): string | null {
    return this._fields['message'] ?? null;
  }
  
  getMessage(): string | null {
      return this._fields['message'] ?? null;
  }

  setMessage(value: null | string) {
    this._fields['message'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'message')) {
      data['message'] = this['message'];
    }

    return data;
  }
}

import { PostKycDocumentMatchesRequest } from '../models/post-kyc-document-matches-request';

export default class KycIdentityMatches implements PostKycDocumentMatchesRequest {
  get [PostKycDocumentMatchesRequest](): true {
    return true;
  }

  DOCUMENT_SUBTYPE_PASSPORT = 'passport';

  DOCUMENT_SUBTYPE_ID_CARD = 'id-card';

  DOCUMENT_SUBTYPE_DRIVER_LICENSE = 'driver-license';

  DOCUMENT_SUBTYPE_BIRTH_CERTIFICATE = 'birth-certificate';

  DOCUMENT_SUBTYPE_UTILITY_BILL = 'utility-bill';

  DOCUMENT_SUBTYPE_RENTAL_RECEIPT = 'rental-receipt';

  DOCUMENT_SUBTYPE_LEASE_AGREEMENT = 'lease-agreement';

  DOCUMENT_SUBTYPE_COPY_CREDIT_CARD = 'copy-credit-card';

  DOCUMENT_SUBTYPE_CREDIT_CARD_STATEMENT = 'credit-card-statement';

  DOCUMENT_SUBTYPE_BANK_STATEMENT = 'bank-statement';

  DOCUMENT_SUBTYPE_INHERITANCE_DOCUMENTATION = 'inheritance-documentation';

  DOCUMENT_SUBTYPE_TAX_RETURN = 'tax-return';

  DOCUMENT_SUBTYPE_SALARY_SLIP = 'salary-slip';

  DOCUMENT_SUBTYPE_SALE_OF_ASSETS = 'sale-of-assets';

  DOCUMENT_SUBTYPE_PUBLIC_HEALTH_CARD = 'public-health-card';

  DOCUMENT_SUBTYPE_PROOF_OF_AGE_CARD = 'proof-of-age-card';

  DOCUMENT_SUBTYPE_REVERSE_OF_ID = 'reverse-of-id';

  DOCUMENT_SUBTYPE_PUBLIC_SERVICE = 'public-service';

  DOCUMENT_SUBTYPE_EWALLET_HOLDER_DETAILS = 'ewallet-holder-details';

  DOCUMENT_SUBTYPE_EWALLET_TRANSACTION_STATEMENT = 'ewallet-transaction-statement';

  DOCUMENT_SUBTYPE_MARRIAGE_CERTIFICATE = 'marriage-certificate';

  DOCUMENT_SUBTYPE_FIREARMS_LICENSE = 'firearms-license';

  DOCUMENT_SUBTYPE_INSURANCE_LETTER = 'insurance-letter';

  DOCUMENT_SUBTYPE_INCOME_STATEMENT = 'income-statement';

  DOCUMENT_SUBTYPE_DEBTORS_LETTER = 'debtors-letter';

  DOCUMENT_SUBTYPE_OTHER = 'other';

  DOCUMENT_SUBTYPE_NULL = 'null';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'containsImage')) {
      this.setContainsImage(data['containsImage']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isIdentityDocument')) {
      this.setIsIdentityDocument(data['isIdentityDocument']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isPublishedOnline')) {
      this.setIsPublishedOnline(data['isPublishedOnline']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'matchingImages')) {
      this.setMatchingImages(data['matchingImages']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dateOfBirth')) {
      this.setDateOfBirth(data['dateOfBirth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationDate')) {
      this.setExpirationDate(data['expirationDate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issueDate')) {
      this.setIssueDate(data['issueDate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasMinimalAge')) {
      this.setHasMinimalAge(data['hasMinimalAge']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nationality')) {
      this.setNationality(data['nationality']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issuanceCountry')) {
      this.setIssuanceCountry(data['issuanceCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issuanceRegion')) {
      this.setIssuanceRegion(data['issuanceRegion']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'documentNumber')) {
      this.setDocumentNumber(data['documentNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'documentSubtype')) {
      this.setDocumentSubtype(data['documentSubtype']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasMatchingFaceProof')) {
      this.setHasMatchingFaceProof(data['hasMatchingFaceProof']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isTampered')) {
      this.setIsTampered(data['isTampered']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isDigitallyTampered')) {
      this.setIsDigitallyTampered(data['isDigitallyTampered']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasCompletedFaceLiveness')) {
      this.setHasCompletedFaceLiveness(data['hasCompletedFaceLiveness']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expiryDate')) {
      this.setExpiryDate(data['expiryDate']);
    }
  }


  get containsImage(): boolean | null {
    return this._fields['containsImage'] ?? null;
  }
  
  getContainsImage(): boolean | null {
      return this._fields['containsImage'] ?? null;
  }

  setContainsImage(value: null | boolean) {
    this._fields['containsImage'] = value;

    return this;
  }

  get isIdentityDocument(): boolean | null {
    return this._fields['isIdentityDocument'] ?? null;
  }
  
  getIsIdentityDocument(): boolean | null {
      return this._fields['isIdentityDocument'] ?? null;
  }

  setIsIdentityDocument(value: null | boolean) {
    this._fields['isIdentityDocument'] = value;

    return this;
  }

  get isPublishedOnline(): boolean | null {
    return this._fields['isPublishedOnline'] ?? null;
  }
  
  getIsPublishedOnline(): boolean | null {
      return this._fields['isPublishedOnline'] ?? null;
  }

  setIsPublishedOnline(value: null | boolean) {
    this._fields['isPublishedOnline'] = value;

    return this;
  }

  get matchingImages(): Array<any> | null {
    return this._fields['matchingImages'] ?? null;
  }
  
  getMatchingImages(): Array<any> | null {
      return this._fields['matchingImages'] ?? null;
  }

  private setMatchingImages(value: null | Array<any>) {
    this._fields['matchingImages'] = value;

    return this;
  }

  get firstName(): string | null {
    return this._fields['firstName'] ?? null;
  }
  
  getFirstName(): string | null {
      return this._fields['firstName'] ?? null;
  }

  setFirstName(value: null | string) {
    this._fields['firstName'] = value;

    return this;
  }

  get lastName(): string | null {
    return this._fields['lastName'] ?? null;
  }
  
  getLastName(): string | null {
      return this._fields['lastName'] ?? null;
  }

  setLastName(value: null | string) {
    this._fields['lastName'] = value;

    return this;
  }

  get dateOfBirth(): Date | null {
    return this._fields['dateOfBirth'] ?? null;
  }
  
  getDateOfBirth(): Date | null {
      return this._fields['dateOfBirth'] ?? null;
  }

  setDateOfBirth(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['dateOfBirth'] = value;

    return this;
  }

  get expirationDate(): Date | null {
    return this._fields['expirationDate'] ?? null;
  }
  
  getExpirationDate(): Date | null {
      return this._fields['expirationDate'] ?? null;
  }

  setExpirationDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expirationDate'] = value;

    return this;
  }

  get issueDate(): Date | null {
    return this._fields['issueDate'] ?? null;
  }
  
  getIssueDate(): Date | null {
      return this._fields['issueDate'] ?? null;
  }

  setIssueDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['issueDate'] = value;

    return this;
  }

  get hasMinimalAge(): boolean | null {
    return this._fields['hasMinimalAge'] ?? null;
  }
  
  getHasMinimalAge(): boolean | null {
      return this._fields['hasMinimalAge'] ?? null;
  }

  private setHasMinimalAge(value: null | boolean) {
    this._fields['hasMinimalAge'] = value;

    return this;
  }

  get nationality(): string | null {
    return this._fields['nationality'] ?? null;
  }
  
  getNationality(): string | null {
      return this._fields['nationality'] ?? null;
  }

  setNationality(value: null | string) {
    this._fields['nationality'] = value;

    return this;
  }

  get issuanceCountry(): string | null {
    return this._fields['issuanceCountry'] ?? null;
  }
  
  getIssuanceCountry(): string | null {
      return this._fields['issuanceCountry'] ?? null;
  }

  setIssuanceCountry(value: null | string) {
    this._fields['issuanceCountry'] = value;

    return this;
  }

  get issuanceRegion(): string | null {
    return this._fields['issuanceRegion'] ?? null;
  }
  
  getIssuanceRegion(): string | null {
      return this._fields['issuanceRegion'] ?? null;
  }

  setIssuanceRegion(value: null | string) {
    this._fields['issuanceRegion'] = value;

    return this;
  }

  get documentNumber(): string | null {
    return this._fields['documentNumber'] ?? null;
  }
  
  getDocumentNumber(): string | null {
      return this._fields['documentNumber'] ?? null;
  }

  setDocumentNumber(value: null | string) {
    this._fields['documentNumber'] = value;

    return this;
  }

  get documentSubtype(): string | null {
    return this._fields['documentSubtype'] ?? null;
  }
  
  getDocumentSubtype(): string | null {
      return this._fields['documentSubtype'] ?? null;
  }

  setDocumentSubtype(value: null | string) {
    this._fields['documentSubtype'] = value;

    return this;
  }

  get hasMatchingFaceProof(): boolean | null {
    return this._fields['hasMatchingFaceProof'] ?? null;
  }
  
  getHasMatchingFaceProof(): boolean | null {
      return this._fields['hasMatchingFaceProof'] ?? null;
  }

  setHasMatchingFaceProof(value: null | boolean) {
    this._fields['hasMatchingFaceProof'] = value;

    return this;
  }

  get isTampered(): boolean | null {
    return this._fields['isTampered'] ?? null;
  }
  
  getIsTampered(): boolean | null {
      return this._fields['isTampered'] ?? null;
  }

  setIsTampered(value: null | boolean) {
    this._fields['isTampered'] = value;

    return this;
  }

  get isDigitallyTampered(): boolean | null {
    return this._fields['isDigitallyTampered'] ?? null;
  }
  
  getIsDigitallyTampered(): boolean | null {
      return this._fields['isDigitallyTampered'] ?? null;
  }

  setIsDigitallyTampered(value: null | boolean) {
    this._fields['isDigitallyTampered'] = value;

    return this;
  }

  get hasCompletedFaceLiveness(): boolean | null {
    return this._fields['hasCompletedFaceLiveness'] ?? null;
  }
  
  getHasCompletedFaceLiveness(): boolean | null {
      return this._fields['hasCompletedFaceLiveness'] ?? null;
  }

  private setHasCompletedFaceLiveness(value: null | boolean) {
    this._fields['hasCompletedFaceLiveness'] = value;

    return this;
  }

  get expiryDate(): Date | null {
    return this._fields['expiryDate'] ?? null;
  }
  
  getExpiryDate(): Date | null {
      return this._fields['expiryDate'] ?? null;
  }

  setExpiryDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expiryDate'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'containsImage')) {
      data['containsImage'] = this['containsImage'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isIdentityDocument')) {
      data['isIdentityDocument'] = this['isIdentityDocument'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isPublishedOnline')) {
      data['isPublishedOnline'] = this['isPublishedOnline'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'matchingImages')) {
      data['matchingImages'] = this['matchingImages'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dateOfBirth')) {
      data['dateOfBirth'] = this['dateOfBirth']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationDate')) {
      data['expirationDate'] = this['expirationDate']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issueDate')) {
      data['issueDate'] = this['issueDate']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMinimalAge')) {
      data['hasMinimalAge'] = this['hasMinimalAge'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nationality')) {
      data['nationality'] = this['nationality'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issuanceCountry')) {
      data['issuanceCountry'] = this['issuanceCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issuanceRegion')) {
      data['issuanceRegion'] = this['issuanceRegion'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentNumber')) {
      data['documentNumber'] = this['documentNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentSubtype')) {
      data['documentSubtype'] = this['documentSubtype'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMatchingFaceProof')) {
      data['hasMatchingFaceProof'] = this['hasMatchingFaceProof'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isTampered')) {
      data['isTampered'] = this['isTampered'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isDigitallyTampered')) {
      data['isDigitallyTampered'] = this['isDigitallyTampered'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasCompletedFaceLiveness')) {
      data['hasCompletedFaceLiveness'] = this['hasCompletedFaceLiveness'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expiryDate')) {
      data['expiryDate'] = this['expiryDate']?.toISOString() ?? null;
    }

    return data;
  }
}

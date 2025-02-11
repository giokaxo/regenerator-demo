import { KycDocument } from '../models/kyc-document';
import KycDocumentRejection from '../models/kyc-document-rejection';
import ProofOfFundsKycDocumentDocumentMatches from '../models/proof-of-funds-kyc-document-document-matches';
import ProofOfFundsKycDocumentParsedData from '../models/proof-of-funds-kyc-document-parsed-data';
import ProofOfFundsKycDocumentEmbedded from '../models/proof-of-funds-kyc-document-embedded';
import Tag from '../models/tag';
import ResourceLink from '../models/resource-link';

export default class ProofOfFundsKycDocument implements KycDocument {
  get [KycDocument](): true {
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

  STATUS_PENDING = 'pending';

  STATUS_IN_PROGRESS = 'in-progress';

  STATUS_ACCEPTED = 'accepted';

  STATUS_REJECTED = 'rejected';

  STATUS_ARCHIVED = 'archived';

  MATCH_LEVEL_1 = '1';

  MATCH_LEVEL_2 = '2';

  MATCH_LEVEL_3 = '3';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fileIds')) {
      this.setFileIds(data['fileIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'documentSubtype')) {
      this.setDocumentSubtype(data['documentSubtype']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rejectionReason')) {
      this.setRejectionReason(data['rejectionReason']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requestId')) {
      this.setRequestId(data['requestId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'processedTime')) {
      this.setProcessedTime(data['processedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reviewerId')) {
      this.setReviewerId(data['reviewerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reviewerName')) {
      this.setReviewerName(data['reviewerName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reviewStartTime')) {
      this.setReviewStartTime(data['reviewStartTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reviewTime')) {
      this.setReviewTime(data['reviewTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notes')) {
      this.setNotes(data['notes']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tags')) {
      this.setTags(data['tags']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reason')) {
      this.setReason(data['reason']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'matchLevel')) {
      this.setMatchLevel(data['matchLevel']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'settings')) {
      this.setSettings(data['settings']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'revision')) {
      this.setRevision(data['revision']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'documentMatches')) {
      this.setDocumentMatches(data['documentMatches']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'parsedData')) {
      this.setParsedData(data['parsedData']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_embedded')) {
      this.setEmbedded(data['_embedded']);
    }
  }


  public get documentType() {
    return 'funds-proof';
  }

  public getDocumentType() {
    return 'funds-proof';
  }

  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get fileIds(): Array<any> {
    return this._fields['fileIds'];
  }
  
  getFileIds(): Array<any> {
      return this._fields['fileIds'];
  }

  setFileIds(value: Array<any>) {
    this._fields['fileIds'] = value;

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

  get status(): string {
    return this._fields['status'];
  }
  
  getStatus(): string {
      return this._fields['status'];
  }

  private setStatus(value: string) {
    this._fields['status'] = value;

    return this;
  }

  get rejectionReason(): KycDocumentRejection | null {
    return this._fields['rejectionReason'] ?? null;
  }
  
  getRejectionReason(): KycDocumentRejection | null {
      return this._fields['rejectionReason'] ?? null;
  }

  setRejectionReason(value: null | KycDocumentRejection | any) {
    if (value !== null && !(value instanceof KycDocumentRejection)) {
      value = new KycDocumentRejection(value);
    }

    this._fields['rejectionReason'] = value;

    return this;
  }

  get requestId(): string | null {
    return this._fields['requestId'] ?? null;
  }
  
  getRequestId(): string | null {
      return this._fields['requestId'] ?? null;
  }

  private setRequestId(value: null | string) {
    this._fields['requestId'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

    return this;
  }

  get processedTime(): Date | null {
    return this._fields['processedTime'] ?? null;
  }
  
  getProcessedTime(): Date | null {
      return this._fields['processedTime'] ?? null;
  }

  private setProcessedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['processedTime'] = value;

    return this;
  }

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
  }

  get reviewerId(): string | null {
    return this._fields['reviewerId'] ?? null;
  }
  
  getReviewerId(): string | null {
      return this._fields['reviewerId'] ?? null;
  }

  private setReviewerId(value: null | string) {
    this._fields['reviewerId'] = value;

    return this;
  }

  get reviewerName(): string | null {
    return this._fields['reviewerName'] ?? null;
  }
  
  getReviewerName(): string | null {
      return this._fields['reviewerName'] ?? null;
  }

  private setReviewerName(value: null | string) {
    this._fields['reviewerName'] = value;

    return this;
  }

  get reviewStartTime(): Date | null {
    return this._fields['reviewStartTime'] ?? null;
  }
  
  getReviewStartTime(): Date | null {
      return this._fields['reviewStartTime'] ?? null;
  }

  private setReviewStartTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['reviewStartTime'] = value;

    return this;
  }

  get reviewTime(): Date | null {
    return this._fields['reviewTime'] ?? null;
  }
  
  getReviewTime(): Date | null {
      return this._fields['reviewTime'] ?? null;
  }

  private setReviewTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['reviewTime'] = value;

    return this;
  }

  get notes(): string | null {
    return this._fields['notes'] ?? null;
  }
  
  getNotes(): string | null {
      return this._fields['notes'] ?? null;
  }

  setNotes(value: null | string) {
    this._fields['notes'] = value;

    return this;
  }

  get tags(): Array<any> | null {
    return this._fields['tags'] ?? null;
  }
  
  getTags(): Array<any> | null {
      return this._fields['tags'] ?? null;
  }

  private setTags(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Tag ? value : new Tag(value),
    ) : null;

    this._fields['tags'] = value;

    return this;
  }

  get reason(): string | null {
    return this._fields['reason'] ?? null;
  }
  
  getReason(): string | null {
      return this._fields['reason'] ?? null;
  }

  setReason(value: null | string) {
    this._fields['reason'] = value;

    return this;
  }

  get matchLevel(): number | null {
    return this._fields['matchLevel'] ?? null;
  }
  
  getMatchLevel(): number | null {
      return this._fields['matchLevel'] ?? null;
  }

  setMatchLevel(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['matchLevel'] = value;

    return this;
  }

  get settings(): Record<string, any> | null {
    return this._fields['settings'] ?? null;
  }
  
  getSettings(): Record<string, any> | null {
      return this._fields['settings'] ?? null;
  }

  setSettings(value: null | Record<string, any>) {
    this._fields['settings'] = value;

    return this;
  }

  get revision(): number | null {
    return this._fields['revision'] ?? null;
  }
  
  getRevision(): number | null {
      return this._fields['revision'] ?? null;
  }

  private setRevision(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['revision'] = value;

    return this;
  }

  get documentMatches(): ProofOfFundsKycDocumentDocumentMatches | null {
    return this._fields['documentMatches'] ?? null;
  }
  
  getDocumentMatches(): ProofOfFundsKycDocumentDocumentMatches | null {
      return this._fields['documentMatches'] ?? null;
  }

  setDocumentMatches(value: null | ProofOfFundsKycDocumentDocumentMatches | any) {
    if (value !== null && !(value instanceof ProofOfFundsKycDocumentDocumentMatches)) {
      value = new ProofOfFundsKycDocumentDocumentMatches(value);
    }

    this._fields['documentMatches'] = value;

    return this;
  }

  get parsedData(): ProofOfFundsKycDocumentParsedData | null {
    return this._fields['parsedData'] ?? null;
  }
  
  getParsedData(): ProofOfFundsKycDocumentParsedData | null {
      return this._fields['parsedData'] ?? null;
  }

  setParsedData(value: null | ProofOfFundsKycDocumentParsedData | any) {
    if (value !== null && !(value instanceof ProofOfFundsKycDocumentParsedData)) {
      value = new ProofOfFundsKycDocumentParsedData(value);
    }

    this._fields['parsedData'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  get embedded(): ProofOfFundsKycDocumentEmbedded | null {
    return this._fields['_embedded'] ?? null;
  }
  
  getEmbedded(): ProofOfFundsKycDocumentEmbedded | null {
      return this._fields['_embedded'] ?? null;
  }

  setEmbedded(value: null | ProofOfFundsKycDocumentEmbedded | any) {
    if (value !== null && !(value instanceof ProofOfFundsKycDocumentEmbedded)) {
      value = new ProofOfFundsKycDocumentEmbedded(value);
    }

    this._fields['_embedded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      documentType: 'funds-proof',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fileIds')) {
      data['fileIds'] = this['fileIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentSubtype')) {
      data['documentSubtype'] = this['documentSubtype'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rejectionReason')) {
      data['rejectionReason'] = this['rejectionReason']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requestId')) {
      data['requestId'] = this['requestId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'processedTime')) {
      data['processedTime'] = this['processedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reviewerId')) {
      data['reviewerId'] = this['reviewerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reviewerName')) {
      data['reviewerName'] = this['reviewerName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reviewStartTime')) {
      data['reviewStartTime'] = this['reviewStartTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reviewTime')) {
      data['reviewTime'] = this['reviewTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notes')) {
      data['notes'] = this['notes'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tags')) {
      data['tags'] = this['tags'] !== null
          ? this._fields['tags'].map((tag: Tag) => tag.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reason')) {
      data['reason'] = this['reason'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'matchLevel')) {
      data['matchLevel'] = this['matchLevel'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'settings')) {
      data['settings'] = this['settings'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'revision')) {
      data['revision'] = this['revision'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentMatches')) {
      data['documentMatches'] = this['documentMatches']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'parsedData')) {
      data['parsedData'] = this['parsedData']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'embedded')) {
      data['_embedded'] = this['embedded']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

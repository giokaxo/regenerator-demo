import ProofOfAddressKycDocument from '../models/proof-of-address-kyc-document';
import ProofOfCreditFileKycDocument from '../models/proof-of-credit-file-kyc-document';
import ProofOfFundsKycDocument from '../models/proof-of-funds-kyc-document';
import ProofOfIdentityKycDocument from '../models/proof-of-identity-kyc-document';
import ProofOfPurchaseKycDocument from '../models/proof-of-purchase-kyc-document';
import KycDocumentRejection from '../models/kyc-document-rejection';

export const KycDocument = Symbol('KycDocument');

export interface KycDocument {
  [KycDocument]: true;

  get documentType(): string;
  getDocumentType(): string;

  get id(): string | null;
  getId(): string | null;

  get fileIds(): Array<any>;
  getFileIds(): Array<any>;
  setFileIds(value: Array<any>): this;
  get documentSubtype(): string | null;
  getDocumentSubtype(): string | null;
  setDocumentSubtype(value: null | string): this;
  get status(): string;
  getStatus(): string;

  get rejectionReason(): KycDocumentRejection | null;
  getRejectionReason(): KycDocumentRejection | null;
  setRejectionReason(value: null | KycDocumentRejection | any): this;
  get requestId(): string | null;
  getRequestId(): string | null;

  get createdTime(): Date | null;
  getCreatedTime(): Date | null;

  get updatedTime(): Date | null;
  getUpdatedTime(): Date | null;

  get processedTime(): Date | null;
  getProcessedTime(): Date | null;

  get customerId(): string;
  getCustomerId(): string;
  setCustomerId(value: string): this;
  get reviewerId(): string | null;
  getReviewerId(): string | null;

  get reviewerName(): string | null;
  getReviewerName(): string | null;

  get reviewStartTime(): Date | null;
  getReviewStartTime(): Date | null;

  get reviewTime(): Date | null;
  getReviewTime(): Date | null;

  get notes(): string | null;
  getNotes(): string | null;
  setNotes(value: null | string): this;
  get tags(): Array<any> | null;
  getTags(): Array<any> | null;

  get reason(): string | null;
  getReason(): string | null;
  setReason(value: null | string): this;
  get matchLevel(): number | null;
  getMatchLevel(): number | null;
  setMatchLevel(value: null | number | string): this;
  get revision(): number | null;
  getRevision(): number | null;

  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}

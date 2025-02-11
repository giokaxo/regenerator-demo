import KycAddressMatches from '../models/kyc-address-matches';
import KycIdentityMatches from '../models/kyc-identity-matches';

export const PostKycDocumentMatchesRequest = Symbol('PostKycDocumentMatchesRequest');

export interface PostKycDocumentMatchesRequest {
  [PostKycDocumentMatchesRequest]: true;

  get firstName(): string | null;
  getFirstName(): string | null;
  setFirstName(value: null | string): this;
  get lastName(): string | null;
  getLastName(): string | null;
  setLastName(value: null | string): this;
  get documentSubtype(): string | null;
  getDocumentSubtype(): string | null;
  setDocumentSubtype(value: null | string): this;
  get isTampered(): boolean | null;
  getIsTampered(): boolean | null;
  setIsTampered(value: null | boolean): this;  jsonSerialize(): Record<string, any>;
}

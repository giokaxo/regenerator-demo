import PatchPlaidCredential from '../models/patch-plaid-credential';
import PatchServiceCredential from '../models/patch-service-credential';
import PatchTaxJarCredential from '../models/patch-tax-jar-credential';

export const PatchServiceCredentialRequest = Symbol('PatchServiceCredentialRequest');

export interface PatchServiceCredentialRequest {
  [PatchServiceCredentialRequest]: true;

  get status(): string | null;
  getStatus(): string | null;
  setStatus(value: string): this;  jsonSerialize(): Record<string, any>;
}

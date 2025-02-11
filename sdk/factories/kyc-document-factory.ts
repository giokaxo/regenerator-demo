import ProofOfAddressKycDocument from '../models/proof-of-address-kyc-document';
import ProofOfCreditFileKycDocument from '../models/proof-of-credit-file-kyc-document';
import ProofOfFundsKycDocument from '../models/proof-of-funds-kyc-document';
import ProofOfIdentityKycDocument from '../models/proof-of-identity-kyc-document';
import ProofOfPurchaseKycDocument from '../models/proof-of-purchase-kyc-document';
import KycDocumentRejection from '../models/kyc-document-rejection';
import { KycDocument } from '../models/kyc-document';

export default class KycDocumentFactory {
  static from(data: any = {}): KycDocument {
    switch(data.documentType) {
      case 'address-proof': return new ProofOfAddressKycDocument(data);
      case 'credit-file-proof': return new ProofOfCreditFileKycDocument(data);
      case 'funds-proof': return new ProofOfFundsKycDocument(data);
      case 'identity-proof': return new ProofOfIdentityKycDocument(data);
      case 'purchase-proof': return new ProofOfPurchaseKycDocument(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

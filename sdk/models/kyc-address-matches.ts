import { PostKycDocumentMatchesRequest } from '../models/post-kyc-document-matches-request';

export default class KycAddressMatches implements PostKycDocumentMatchesRequest {
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
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'line1')) {
      this.setLine1(data['line1']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'city')) {
      this.setCity(data['city']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'region')) {
      this.setRegion(data['region']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'postalCode')) {
      this.setPostalCode(data['postalCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'wordCount')) {
      this.setWordCount(data['wordCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'uniqueWords')) {
      this.setUniqueWords(data['uniqueWords']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'date')) {
      this.setDate(data['date']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'phone')) {
      this.setPhone(data['phone']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'documentSubtype')) {
      this.setDocumentSubtype(data['documentSubtype']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isTampered')) {
      this.setIsTampered(data['isTampered']);
    }
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

  get line1(): string | null {
    return this._fields['line1'] ?? null;
  }
  
  getLine1(): string | null {
      return this._fields['line1'] ?? null;
  }

  setLine1(value: null | string) {
    this._fields['line1'] = value;

    return this;
  }

  get city(): string | null {
    return this._fields['city'] ?? null;
  }
  
  getCity(): string | null {
      return this._fields['city'] ?? null;
  }

  setCity(value: null | string) {
    this._fields['city'] = value;

    return this;
  }

  get region(): string | null {
    return this._fields['region'] ?? null;
  }
  
  getRegion(): string | null {
      return this._fields['region'] ?? null;
  }

  setRegion(value: null | string) {
    this._fields['region'] = value;

    return this;
  }

  get postalCode(): string | null {
    return this._fields['postalCode'] ?? null;
  }
  
  getPostalCode(): string | null {
      return this._fields['postalCode'] ?? null;
  }

  setPostalCode(value: null | string) {
    this._fields['postalCode'] = value;

    return this;
  }

  get wordCount(): number | null {
    return this._fields['wordCount'] ?? null;
  }
  
  getWordCount(): number | null {
      return this._fields['wordCount'] ?? null;
  }

  setWordCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['wordCount'] = value;

    return this;
  }

  get uniqueWords(): number | null {
    return this._fields['uniqueWords'] ?? null;
  }
  
  getUniqueWords(): number | null {
      return this._fields['uniqueWords'] ?? null;
  }

  setUniqueWords(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['uniqueWords'] = value;

    return this;
  }

  get date(): Date | null {
    return this._fields['date'] ?? null;
  }
  
  getDate(): Date | null {
      return this._fields['date'] ?? null;
  }

  setDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['date'] = value;

    return this;
  }

  get phone(): string | null {
    return this._fields['phone'] ?? null;
  }
  
  getPhone(): string | null {
      return this._fields['phone'] ?? null;
  }

  setPhone(value: null | string) {
    this._fields['phone'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'line1')) {
      data['line1'] = this['line1'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'city')) {
      data['city'] = this['city'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'region')) {
      data['region'] = this['region'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'postalCode')) {
      data['postalCode'] = this['postalCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'wordCount')) {
      data['wordCount'] = this['wordCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'uniqueWords')) {
      data['uniqueWords'] = this['uniqueWords'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'date')) {
      data['date'] = this['date']?.toISOString().substring(0, 10) ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'phone')) {
      data['phone'] = this['phone'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentSubtype')) {
      data['documentSubtype'] = this['documentSubtype'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isTampered')) {
      data['isTampered'] = this['isTampered'];
    }

    return data;
  }
}

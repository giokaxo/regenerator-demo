
export default class PurchaseMatches {
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
    if (Object.prototype.hasOwnProperty.call(data, 'paymentInstrumentId')) {
      this.setPaymentInstrumentId(data['paymentInstrumentId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'documentSubtype')) {
      this.setDocumentSubtype(data['documentSubtype']);
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

  get paymentInstrumentId(): string | null {
    return this._fields['paymentInstrumentId'] ?? null;
  }
  
  getPaymentInstrumentId(): string | null {
      return this._fields['paymentInstrumentId'] ?? null;
  }

  setPaymentInstrumentId(value: null | string) {
    this._fields['paymentInstrumentId'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentInstrumentId')) {
      data['paymentInstrumentId'] = this['paymentInstrumentId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'documentSubtype')) {
      data['documentSubtype'] = this['documentSubtype'];
    }

    return data;
  }
}

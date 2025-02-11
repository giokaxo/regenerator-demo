
export default class KycRequestDocument {
  TYPE_IDENTITY_PROOF = 'identity-proof';

  TYPE_ADDRESS_PROOF = 'address-proof';

  TYPE_FUNDS_PROOF = 'funds-proof';

  TYPE_PURCHASE_PROOF = 'purchase-proof';

  TYPE_CREDIT_FILE_PROOF = 'credit-file-proof';

  SUBTYPES_PASSPORT = 'passport';

  SUBTYPES_ID_CARD = 'id-card';

  SUBTYPES_DRIVER_LICENSE = 'driver-license';

  SUBTYPES_BIRTH_CERTIFICATE = 'birth-certificate';

  SUBTYPES_UTILITY_BILL = 'utility-bill';

  SUBTYPES_RENTAL_RECEIPT = 'rental-receipt';

  SUBTYPES_LEASE_AGREEMENT = 'lease-agreement';

  SUBTYPES_COPY_CREDIT_CARD = 'copy-credit-card';

  SUBTYPES_CREDIT_CARD_STATEMENT = 'credit-card-statement';

  SUBTYPES_BANK_STATEMENT = 'bank-statement';

  SUBTYPES_INHERITANCE_DOCUMENTATION = 'inheritance-documentation';

  SUBTYPES_TAX_RETURN = 'tax-return';

  SUBTYPES_SALARY_SLIP = 'salary-slip';

  SUBTYPES_SALE_OF_ASSETS = 'sale-of-assets';

  SUBTYPES_PUBLIC_HEALTH_CARD = 'public-health-card';

  SUBTYPES_PROOF_OF_AGE_CARD = 'proof-of-age-card';

  SUBTYPES_REVERSE_OF_ID = 'reverse-of-id';

  SUBTYPES_PUBLIC_SERVICE = 'public-service';

  SUBTYPES_EWALLET_HOLDER_DETAILS = 'ewallet-holder-details';

  SUBTYPES_EWALLET_TRANSACTION_STATEMENT = 'ewallet-transaction-statement';

  SUBTYPES_MARRIAGE_CERTIFICATE = 'marriage-certificate';

  SUBTYPES_FIREARMS_LICENSE = 'firearms-license';

  SUBTYPES_INSURANCE_LETTER = 'insurance-letter';

  SUBTYPES_INCOME_STATEMENT = 'income-statement';

  SUBTYPES_DEBTORS_LETTER = 'debtors-letter';

  SUBTYPES_OTHER = 'other';

  SUBTYPES_NULL = 'null';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subtypes')) {
      this.setSubtypes(data['subtypes']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'maxAttempts')) {
      this.setMaxAttempts(data['maxAttempts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'faceProofRequired')) {
      this.setFaceProofRequired(data['faceProofRequired']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'faceLivenessRequired')) {
      this.setFaceLivenessRequired(data['faceLivenessRequired']);
    }
  }


  get type(): string {
    return this._fields['type'];
  }
  
  getType(): string {
      return this._fields['type'];
  }

  setType(value: string) {
    this._fields['type'] = value;

    return this;
  }

  get subtypes(): Array<any> | null {
    return this._fields['subtypes'] ?? null;
  }
  
  getSubtypes(): Array<any> | null {
      return this._fields['subtypes'] ?? null;
  }

  setSubtypes(value: null | Array<any>) {
    this._fields['subtypes'] = value;

    return this;
  }

  get maxAttempts(): number | null {
    return this._fields['maxAttempts'] ?? null;
  }
  
  getMaxAttempts(): number | null {
      return this._fields['maxAttempts'] ?? null;
  }

  setMaxAttempts(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['maxAttempts'] = value;

    return this;
  }

  get faceProofRequired(): boolean | null {
    return this._fields['faceProofRequired'] ?? null;
  }
  
  getFaceProofRequired(): boolean | null {
      return this._fields['faceProofRequired'] ?? null;
  }

  setFaceProofRequired(value: null | boolean) {
    this._fields['faceProofRequired'] = value;

    return this;
  }

  get faceLivenessRequired(): boolean | null {
    return this._fields['faceLivenessRequired'] ?? null;
  }
  
  getFaceLivenessRequired(): boolean | null {
      return this._fields['faceLivenessRequired'] ?? null;
  }

  setFaceLivenessRequired(value: null | boolean) {
    this._fields['faceLivenessRequired'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subtypes')) {
      data['subtypes'] = this['subtypes'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'maxAttempts')) {
      data['maxAttempts'] = this['maxAttempts'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'faceProofRequired')) {
      data['faceProofRequired'] = this['faceProofRequired'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'faceLivenessRequired')) {
      data['faceLivenessRequired'] = this['faceLivenessRequired'];
    }

    return data;
  }
}

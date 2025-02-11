
export default class KycSettingsIdentityWeights {
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
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationDate')) {
      this.setExpirationDate(data['expirationDate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dateOfBirth')) {
      this.setDateOfBirth(data['dateOfBirth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'matchesDateOfBirth')) {
      this.setMatchesDateOfBirth(data['matchesDateOfBirth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'issueDate')) {
      this.setIssueDate(data['issueDate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasMinimalAge')) {
      this.setHasMinimalAge(data['hasMinimalAge']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hasMatchingFaceProof')) {
      this.setHasMatchingFaceProof(data['hasMatchingFaceProof']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nationality')) {
      this.setNationality(data['nationality']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'documentSubtype')) {
      this.setDocumentSubtype(data['documentSubtype']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isTampered')) {
      this.setIsTampered(data['isTampered']);
    }
  }


  get containsImage(): number | null {
    return this._fields['containsImage'] ?? null;
  }
  
  getContainsImage(): number | null {
      return this._fields['containsImage'] ?? null;
  }

  setContainsImage(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['containsImage'] = value;

    return this;
  }

  get isIdentityDocument(): number | null {
    return this._fields['isIdentityDocument'] ?? null;
  }
  
  getIsIdentityDocument(): number | null {
      return this._fields['isIdentityDocument'] ?? null;
  }

  setIsIdentityDocument(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['isIdentityDocument'] = value;

    return this;
  }

  get isPublishedOnline(): number | null {
    return this._fields['isPublishedOnline'] ?? null;
  }
  
  getIsPublishedOnline(): number | null {
      return this._fields['isPublishedOnline'] ?? null;
  }

  setIsPublishedOnline(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['isPublishedOnline'] = value;

    return this;
  }

  get firstName(): number | null {
    return this._fields['firstName'] ?? null;
  }
  
  getFirstName(): number | null {
      return this._fields['firstName'] ?? null;
  }

  setFirstName(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['firstName'] = value;

    return this;
  }

  get lastName(): number | null {
    return this._fields['lastName'] ?? null;
  }
  
  getLastName(): number | null {
      return this._fields['lastName'] ?? null;
  }

  setLastName(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['lastName'] = value;

    return this;
  }

  get expirationDate(): number | null {
    return this._fields['expirationDate'] ?? null;
  }
  
  getExpirationDate(): number | null {
      return this._fields['expirationDate'] ?? null;
  }

  setExpirationDate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['expirationDate'] = value;

    return this;
  }

  get dateOfBirth(): number | null {
    return this._fields['dateOfBirth'] ?? null;
  }
  
  getDateOfBirth(): number | null {
      return this._fields['dateOfBirth'] ?? null;
  }

  setDateOfBirth(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['dateOfBirth'] = value;

    return this;
  }

  get matchesDateOfBirth(): number | null {
    return this._fields['matchesDateOfBirth'] ?? null;
  }
  
  getMatchesDateOfBirth(): number | null {
      return this._fields['matchesDateOfBirth'] ?? null;
  }

  setMatchesDateOfBirth(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['matchesDateOfBirth'] = value;

    return this;
  }

  get issueDate(): number | null {
    return this._fields['issueDate'] ?? null;
  }
  
  getIssueDate(): number | null {
      return this._fields['issueDate'] ?? null;
  }

  setIssueDate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['issueDate'] = value;

    return this;
  }

  get hasMinimalAge(): number | null {
    return this._fields['hasMinimalAge'] ?? null;
  }
  
  getHasMinimalAge(): number | null {
      return this._fields['hasMinimalAge'] ?? null;
  }

  setHasMinimalAge(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['hasMinimalAge'] = value;

    return this;
  }

  get hasMatchingFaceProof(): number | null {
    return this._fields['hasMatchingFaceProof'] ?? null;
  }
  
  getHasMatchingFaceProof(): number | null {
      return this._fields['hasMatchingFaceProof'] ?? null;
  }

  setHasMatchingFaceProof(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['hasMatchingFaceProof'] = value;

    return this;
  }

  get nationality(): number | null {
    return this._fields['nationality'] ?? null;
  }
  
  getNationality(): number | null {
      return this._fields['nationality'] ?? null;
  }

  setNationality(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['nationality'] = value;

    return this;
  }

  get documentSubtype(): number | null {
    return this._fields['documentSubtype'] ?? null;
  }
  
  getDocumentSubtype(): number | null {
      return this._fields['documentSubtype'] ?? null;
  }

  setDocumentSubtype(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['documentSubtype'] = value;

    return this;
  }

  get isTampered(): number | null {
    return this._fields['isTampered'] ?? null;
  }
  
  getIsTampered(): number | null {
      return this._fields['isTampered'] ?? null;
  }

  setIsTampered(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['isTampered'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationDate')) {
      data['expirationDate'] = this['expirationDate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dateOfBirth')) {
      data['dateOfBirth'] = this['dateOfBirth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'matchesDateOfBirth')) {
      data['matchesDateOfBirth'] = this['matchesDateOfBirth'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issueDate')) {
      data['issueDate'] = this['issueDate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMinimalAge')) {
      data['hasMinimalAge'] = this['hasMinimalAge'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hasMatchingFaceProof')) {
      data['hasMatchingFaceProof'] = this['hasMatchingFaceProof'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nationality')) {
      data['nationality'] = this['nationality'];
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

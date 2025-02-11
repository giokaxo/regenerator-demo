import AMLAddress from '../models/aml-address';
import AMLAliases from '../models/aml-aliases';
import AMLPassport from '../models/aml-passport';
import ResourceLink from '../models/resource-link';

export default class AML {
  SOURCE_TYPE_PEP = 'pep';

  SOURCE_TYPE_SANCTIONS = 'sanctions';

  SOURCE_TYPE_ADVERSE_MEDIA = 'adverse-media';

  SOURCE_TYPE_ENFORCEMENTS = 'enforcements';

  SOURCE_TYPE_STATE_OWNED_ENTERPRISE = 'state-owned-enterprise';

  TYPE_INDIVIDUAL = 'individual';

  TYPE_ENTITY = 'entity';

  CONFIDENCE_WEAK = 'weak';

  CONFIDENCE_MEDIUM = 'medium';

  CONFIDENCE_STRONG = 'strong';

  CONFIDENCE_VERY_STRONG = 'very-strong';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'source')) {
      this.setSource(data['source']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sourceType')) {
      this.setSourceType(data['sourceType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gender')) {
      this.setGender(data['gender']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'title')) {
      this.setTitle(data['title']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'legalBasis')) {
      this.setLegalBasis(data['legalBasis']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'regime')) {
      this.setRegime(data['regime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'confidence')) {
      this.setConfidence(data['confidence']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nationality')) {
      this.setNationality(data['nationality']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'address')) {
      this.setAddress(data['address']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dob')) {
      this.setDob(data['dob']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'aliases')) {
      this.setAliases(data['aliases']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'passport')) {
      this.setPassport(data['passport']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'comments')) {
      this.setComments(data['comments']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get firstName(): string | null {
    return this._fields['firstName'] ?? null;
  }
  
  getFirstName(): string | null {
      return this._fields['firstName'] ?? null;
  }

  private setFirstName(value: null | string) {
    this._fields['firstName'] = value;

    return this;
  }

  get lastName(): string | null {
    return this._fields['lastName'] ?? null;
  }
  
  getLastName(): string | null {
      return this._fields['lastName'] ?? null;
  }

  private setLastName(value: null | string) {
    this._fields['lastName'] = value;

    return this;
  }

  get source(): string | null {
    return this._fields['source'] ?? null;
  }
  
  getSource(): string | null {
      return this._fields['source'] ?? null;
  }

  private setSource(value: null | string) {
    this._fields['source'] = value;

    return this;
  }

  get sourceType(): Array<any> | null {
    return this._fields['sourceType'] ?? null;
  }
  
  getSourceType(): Array<any> | null {
      return this._fields['sourceType'] ?? null;
  }

  private setSourceType(value: null | Array<any>) {
    this._fields['sourceType'] = value;

    return this;
  }

  get gender(): string | null {
    return this._fields['gender'] ?? null;
  }
  
  getGender(): string | null {
      return this._fields['gender'] ?? null;
  }

  private setGender(value: null | string) {
    this._fields['gender'] = value;

    return this;
  }

  get title(): Array<any> | null {
    return this._fields['title'] ?? null;
  }
  
  getTitle(): Array<any> | null {
      return this._fields['title'] ?? null;
  }

  private setTitle(value: null | Array<any>) {
    this._fields['title'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  private setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get legalBasis(): Array<any> | null {
    return this._fields['legalBasis'] ?? null;
  }
  
  getLegalBasis(): Array<any> | null {
      return this._fields['legalBasis'] ?? null;
  }

  private setLegalBasis(value: null | Array<any>) {
    this._fields['legalBasis'] = value;

    return this;
  }

  get regime(): string | null {
    return this._fields['regime'] ?? null;
  }
  
  getRegime(): string | null {
      return this._fields['regime'] ?? null;
  }

  private setRegime(value: null | string) {
    this._fields['regime'] = value;

    return this;
  }

  get confidence(): string | null {
    return this._fields['confidence'] ?? null;
  }
  
  getConfidence(): string | null {
      return this._fields['confidence'] ?? null;
  }

  private setConfidence(value: null | string) {
    this._fields['confidence'] = value;

    return this;
  }

  get nationality(): string | null {
    return this._fields['nationality'] ?? null;
  }
  
  getNationality(): string | null {
      return this._fields['nationality'] ?? null;
  }

  private setNationality(value: null | string) {
    this._fields['nationality'] = value;

    return this;
  }

  get address(): Array<any> | null {
    return this._fields['address'] ?? null;
  }
  
  getAddress(): Array<any> | null {
      return this._fields['address'] ?? null;
  }

  private setAddress(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof AMLAddress ? value : new AMLAddress(value),
    ) : null;

    this._fields['address'] = value;

    return this;
  }

  get dob(): Array<any> | null {
    return this._fields['dob'] ?? null;
  }
  
  getDob(): Array<any> | null {
      return this._fields['dob'] ?? null;
  }

  private setDob(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Date ? value : new Date(value),
    ) : null;

    this._fields['dob'] = value;

    return this;
  }

  get aliases(): Array<any> | null {
    return this._fields['aliases'] ?? null;
  }
  
  getAliases(): Array<any> | null {
      return this._fields['aliases'] ?? null;
  }

  private setAliases(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof AMLAliases ? value : new AMLAliases(value),
    ) : null;

    this._fields['aliases'] = value;

    return this;
  }

  get passport(): Array<any> | null {
    return this._fields['passport'] ?? null;
  }
  
  getPassport(): Array<any> | null {
      return this._fields['passport'] ?? null;
  }

  private setPassport(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof AMLPassport ? value : new AMLPassport(value),
    ) : null;

    this._fields['passport'] = value;

    return this;
  }

  get comments(): string | null {
    return this._fields['comments'] ?? null;
  }
  
  getComments(): string | null {
      return this._fields['comments'] ?? null;
  }

  private setComments(value: null | string) {
    this._fields['comments'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'source')) {
      data['source'] = this['source'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sourceType')) {
      data['sourceType'] = this['sourceType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gender')) {
      data['gender'] = this['gender'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'title')) {
      data['title'] = this['title'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'legalBasis')) {
      data['legalBasis'] = this['legalBasis'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'regime')) {
      data['regime'] = this['regime'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'confidence')) {
      data['confidence'] = this['confidence'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nationality')) {
      data['nationality'] = this['nationality'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'address')) {
      data['address'] = this['address'] !== null
          ? this._fields['address'].map((aMLAddress: AMLAddress) => aMLAddress.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dob')) {
      data['dob'] = this['dob'] !== null
          ? this._fields['dob'].map((item: Date) => item.toISOString().substring(0, 10))
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aliases')) {
      data['aliases'] = this['aliases'] !== null
          ? this._fields['aliases'].map((aMLAliases: AMLAliases) => aMLAliases.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'passport')) {
      data['passport'] = this['passport'] !== null
          ? this._fields['passport'].map((aMLPassport: AMLPassport) => aMLPassport.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'comments')) {
      data['comments'] = this['comments'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

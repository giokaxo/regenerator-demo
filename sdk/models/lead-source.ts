import LeadSourceData from '../models/lead-source-data';
import ResourceLink from '../models/resource-link';

export default class LeadSource {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'medium')) {
      this.setMedium(data['medium']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'source')) {
      this.setSource(data['source']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'campaign')) {
      this.setCampaign(data['campaign']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'term')) {
      this.setTerm(data['term']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'content')) {
      this.setContent(data['content']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'affiliate')) {
      this.setAffiliate(data['affiliate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subAffiliate')) {
      this.setSubAffiliate(data['subAffiliate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'salesAgent')) {
      this.setSalesAgent(data['salesAgent']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clickId')) {
      this.setClickId(data['clickId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'path')) {
      this.setPath(data['path']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'referrer')) {
      this.setReferrer(data['referrer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'original')) {
      this.setOriginal(data['original']);
    }
  }


  get medium(): string | null {
    return this._fields['medium'] ?? null;
  }
  
  getMedium(): string | null {
      return this._fields['medium'] ?? null;
  }

  setMedium(value: null | string) {
    this._fields['medium'] = value;

    return this;
  }

  get source(): string | null {
    return this._fields['source'] ?? null;
  }
  
  getSource(): string | null {
      return this._fields['source'] ?? null;
  }

  setSource(value: null | string) {
    this._fields['source'] = value;

    return this;
  }

  get campaign(): string | null {
    return this._fields['campaign'] ?? null;
  }
  
  getCampaign(): string | null {
      return this._fields['campaign'] ?? null;
  }

  setCampaign(value: null | string) {
    this._fields['campaign'] = value;

    return this;
  }

  get term(): string | null {
    return this._fields['term'] ?? null;
  }
  
  getTerm(): string | null {
      return this._fields['term'] ?? null;
  }

  setTerm(value: null | string) {
    this._fields['term'] = value;

    return this;
  }

  get content(): string | null {
    return this._fields['content'] ?? null;
  }
  
  getContent(): string | null {
      return this._fields['content'] ?? null;
  }

  setContent(value: null | string) {
    this._fields['content'] = value;

    return this;
  }

  get affiliate(): string | null {
    return this._fields['affiliate'] ?? null;
  }
  
  getAffiliate(): string | null {
      return this._fields['affiliate'] ?? null;
  }

  setAffiliate(value: null | string) {
    this._fields['affiliate'] = value;

    return this;
  }

  get subAffiliate(): string | null {
    return this._fields['subAffiliate'] ?? null;
  }
  
  getSubAffiliate(): string | null {
      return this._fields['subAffiliate'] ?? null;
  }

  setSubAffiliate(value: null | string) {
    this._fields['subAffiliate'] = value;

    return this;
  }

  get salesAgent(): string | null {
    return this._fields['salesAgent'] ?? null;
  }
  
  getSalesAgent(): string | null {
      return this._fields['salesAgent'] ?? null;
  }

  setSalesAgent(value: null | string) {
    this._fields['salesAgent'] = value;

    return this;
  }

  get clickId(): string | null {
    return this._fields['clickId'] ?? null;
  }
  
  getClickId(): string | null {
      return this._fields['clickId'] ?? null;
  }

  setClickId(value: null | string) {
    this._fields['clickId'] = value;

    return this;
  }

  get path(): string | null {
    return this._fields['path'] ?? null;
  }
  
  getPath(): string | null {
      return this._fields['path'] ?? null;
  }

  setPath(value: null | string) {
    this._fields['path'] = value;

    return this;
  }

  get referrer(): string | null {
    return this._fields['referrer'] ?? null;
  }
  
  getReferrer(): string | null {
      return this._fields['referrer'] ?? null;
  }

  setReferrer(value: null | string) {
    this._fields['referrer'] = value;

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

  get original(): LeadSourceData | null {
    return this._fields['original'] ?? null;
  }
  
  getOriginal(): LeadSourceData | null {
      return this._fields['original'] ?? null;
  }

  private setOriginal(value: null | LeadSourceData | any) {
    if (value !== null && !(value instanceof LeadSourceData)) {
      value = new LeadSourceData(value);
    }

    this._fields['original'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'medium')) {
      data['medium'] = this['medium'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'source')) {
      data['source'] = this['source'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'campaign')) {
      data['campaign'] = this['campaign'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'term')) {
      data['term'] = this['term'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'content')) {
      data['content'] = this['content'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'affiliate')) {
      data['affiliate'] = this['affiliate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subAffiliate')) {
      data['subAffiliate'] = this['subAffiliate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'salesAgent')) {
      data['salesAgent'] = this['salesAgent'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clickId')) {
      data['clickId'] = this['clickId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'path')) {
      data['path'] = this['path'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'referrer')) {
      data['referrer'] = this['referrer'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'original')) {
      data['original'] = this['original']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

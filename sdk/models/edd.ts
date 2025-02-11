import EddParsedScore from '../models/edd-parsed-score';
import EddScore from '../models/edd-score';
import ResourceLink from '../models/resource-link';

export default class Edd {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'parsedScore')) {
      this.setParsedScore(data['parsedScore']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'score')) {
      this.setScore(data['score']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nextUpdateTime')) {
      this.setNextUpdateTime(data['nextUpdateTime']);
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
  }


  get parsedScore(): EddParsedScore | null {
    return this._fields['parsedScore'] ?? null;
  }
  
  getParsedScore(): EddParsedScore | null {
      return this._fields['parsedScore'] ?? null;
  }

  setParsedScore(value: null | EddParsedScore | any) {
    if (value !== null && !(value instanceof EddParsedScore)) {
      value = new EddParsedScore(value);
    }

    this._fields['parsedScore'] = value;

    return this;
  }

  get score(): EddScore | null {
    return this._fields['score'] ?? null;
  }
  
  getScore(): EddScore | null {
      return this._fields['score'] ?? null;
  }

  setScore(value: null | EddScore | any) {
    if (value !== null && !(value instanceof EddScore)) {
      value = new EddScore(value);
    }

    this._fields['score'] = value;

    return this;
  }

  get nextUpdateTime(): Date | null {
    return this._fields['nextUpdateTime'] ?? null;
  }
  
  getNextUpdateTime(): Date | null {
      return this._fields['nextUpdateTime'] ?? null;
  }

  setNextUpdateTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['nextUpdateTime'] = value;

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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'parsedScore')) {
      data['parsedScore'] = this['parsedScore']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'score')) {
      data['score'] = this['score']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nextUpdateTime')) {
      data['nextUpdateTime'] = this['nextUpdateTime']?.toISOString() ?? null;
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

    return data;
  }
}

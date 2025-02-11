import RuleSetDraftAuthor from '../models/rule-set-draft-author';
import Bind from '../models/bind';
import Rule from '../models/rule';
import ResourceLink from '../models/resource-link';

export default class RuleSetDraft {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'baseVersion')) {
      this.setBaseVersion(data['baseVersion']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'binds')) {
      this.setBinds(data['binds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'rules')) {
      this.setRules(data['rules']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'author')) {
      this.setAuthor(data['author']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
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


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get baseVersion(): number {
    return this._fields['baseVersion'];
  }
  
  getBaseVersion(): number {
      return this._fields['baseVersion'];
  }

  setBaseVersion(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['baseVersion'] = value;

    return this;
  }

  get binds(): Array<any> | null {
    return this._fields['binds'] ?? null;
  }
  
  getBinds(): Array<any> | null {
      return this._fields['binds'] ?? null;
  }

  setBinds(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof Bind ? value : new Bind(value),
    ) : null;

    this._fields['binds'] = value;

    return this;
  }

  get rules(): Array<any> {
    return this._fields['rules'];
  }
  
  getRules(): Array<any> {
      return this._fields['rules'];
  }

  setRules(value: Array<any>) {
    value = value.map(
      (value) => value instanceof Rule ? value : new Rule(value),
    );

    this._fields['rules'] = value;

    return this;
  }

  get author(): RuleSetDraftAuthor | null {
    return this._fields['author'] ?? null;
  }
  
  getAuthor(): RuleSetDraftAuthor | null {
      return this._fields['author'] ?? null;
  }

  setAuthor(value: null | RuleSetDraftAuthor | any) {
    if (value !== null && !(value instanceof RuleSetDraftAuthor)) {
      value = new RuleSetDraftAuthor(value);
    }

    this._fields['author'] = value;

    return this;
  }

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get description(): string | null {
    return this._fields['description'] ?? null;
  }
  
  getDescription(): string | null {
      return this._fields['description'] ?? null;
  }

  setDescription(value: null | string) {
    this._fields['description'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'baseVersion')) {
      data['baseVersion'] = this['baseVersion'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'binds')) {
      data['binds'] = this['binds'] !== null
          ? this._fields['binds'].map((bind: Bind) => bind.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rules')) {
      data['rules'] = this['rules'].map(
          (rule: Rule) => rule.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'author')) {
      data['author'] = this['author']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
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

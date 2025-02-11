import { PostFileRequest } from '../models/post-file-request';

export default class FileCreateFromUrl implements PostFileRequest {
  get [PostFileRequest](): true {
    return true;
  }

  SOURCE_TYPE_UPLOAD = 'upload';

  SOURCE_TYPE_CAMERA = 'camera';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isPublic')) {
      this.setIsPublic(data['isPublic']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'description')) {
      this.setDescription(data['description']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sourceType')) {
      this.setSourceType(data['sourceType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tags')) {
      this.setTags(data['tags']);
    }
  }


  get url(): string {
    return this._fields['url'];
  }
  
  getUrl(): string {
      return this._fields['url'];
  }

  setUrl(value: string) {
    this._fields['url'] = value;

    return this;
  }

  get isPublic(): boolean | null {
    return this._fields['isPublic'] ?? null;
  }
  
  getIsPublic(): boolean | null {
      return this._fields['isPublic'] ?? null;
  }

  setIsPublic(value: null | boolean) {
    this._fields['isPublic'] = value;

    return this;
  }

  get name(): string | null {
    return this._fields['name'] ?? null;
  }
  
  getName(): string | null {
      return this._fields['name'] ?? null;
  }

  setName(value: null | string) {
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

  get sourceType(): string | null {
    return this._fields['sourceType'] ?? null;
  }
  
  getSourceType(): string | null {
      return this._fields['sourceType'] ?? null;
  }

  setSourceType(value: null | string) {
    this._fields['sourceType'] = value;

    return this;
  }

  get tags(): Array<any> | null {
    return this._fields['tags'] ?? null;
  }
  
  getTags(): Array<any> | null {
      return this._fields['tags'] ?? null;
  }

  setTags(value: null | Array<any>) {
    this._fields['tags'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isPublic')) {
      data['isPublic'] = this['isPublic'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'description')) {
      data['description'] = this['description'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sourceType')) {
      data['sourceType'] = this['sourceType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tags')) {
      data['tags'] = this['tags'];
    }

    return data;
  }
}

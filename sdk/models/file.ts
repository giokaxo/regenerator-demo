import ResourceLink from '../models/resource-link';

export default class File {
  SOURCE_TYPE_UPLOAD = 'upload';

  SOURCE_TYPE_CAMERA = 'camera';

  SOURCE_TYPE_ORGANIZATION_EXPORT = 'organization-export';

  SOURCE_TYPE_ORGANIZATION_CLOSURE_EXPORT = 'organization-closure-export';

  SOURCE_TYPE_NULL = 'null';

  MIME_IMAGE_PNG = 'image/png';

  MIME_IMAGE_JPEG = 'image/jpeg';

  MIME_IMAGE_GIF = 'image/gif';

  MIME_APPLICATION_PDF = 'application/pdf';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'extension')) {
      this.setExtension(data['extension']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'mime')) {
      this.setMime(data['mime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'size')) {
      this.setSize(data['size']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'width')) {
      this.setWidth(data['width']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'height')) {
      this.setHeight(data['height']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sha1')) {
      this.setSha1(data['sha1']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'exifData')) {
      this.setExifData(data['exifData']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isPublic')) {
      this.setIsPublic(data['isPublic']);
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

  get extension(): string | null {
    return this._fields['extension'] ?? null;
  }
  
  getExtension(): string | null {
      return this._fields['extension'] ?? null;
  }

  setExtension(value: null | string) {
    this._fields['extension'] = value;

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

  get mime(): string | null {
    return this._fields['mime'] ?? null;
  }
  
  getMime(): string | null {
      return this._fields['mime'] ?? null;
  }

  private setMime(value: null | string) {
    this._fields['mime'] = value;

    return this;
  }

  get size(): number | null {
    return this._fields['size'] ?? null;
  }
  
  getSize(): number | null {
      return this._fields['size'] ?? null;
  }

  private setSize(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['size'] = value;

    return this;
  }

  get width(): number | null {
    return this._fields['width'] ?? null;
  }
  
  getWidth(): number | null {
      return this._fields['width'] ?? null;
  }

  private setWidth(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['width'] = value;

    return this;
  }

  get height(): number | null {
    return this._fields['height'] ?? null;
  }
  
  getHeight(): number | null {
      return this._fields['height'] ?? null;
  }

  private setHeight(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['height'] = value;

    return this;
  }

  get sha1(): string | null {
    return this._fields['sha1'] ?? null;
  }
  
  getSha1(): string | null {
      return this._fields['sha1'] ?? null;
  }

  private setSha1(value: null | string) {
    this._fields['sha1'] = value;

    return this;
  }

  get exifData(): Record<string, any> | null {
    return this._fields['exifData'] ?? null;
  }
  
  getExifData(): Record<string, any> | null {
      return this._fields['exifData'] ?? null;
  }

  private setExifData(value: null | Record<string, any>) {
    this._fields['exifData'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'extension')) {
      data['extension'] = this['extension'];
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mime')) {
      data['mime'] = this['mime'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'size')) {
      data['size'] = this['size'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'width')) {
      data['width'] = this['width'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'height')) {
      data['height'] = this['height'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sha1')) {
      data['sha1'] = this['sha1'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'exifData')) {
      data['exifData'] = this['exifData'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isPublic')) {
      data['isPublic'] = this['isPublic'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

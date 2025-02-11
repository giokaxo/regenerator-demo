import File from '../models/file';

export default class AttachmentEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'file')) {
      this.setFile(data['file']);
    }
  }


  get file(): File | null {
    return this._fields['file'] ?? null;
  }
  
  getFile(): File | null {
      return this._fields['file'] ?? null;
  }

  setFile(value: null | File | any) {
    if (value !== null && !(value instanceof File)) {
      value = new File(value);
    }

    this._fields['file'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'file')) {
      data['file'] = this['file']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

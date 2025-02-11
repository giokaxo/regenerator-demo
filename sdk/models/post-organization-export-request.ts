
export default class PostOrganizationExportRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'includeFiles')) {
      this.setIncludeFiles(data['includeFiles']);
    }
  }


  get includeFiles(): boolean | null {
    return this._fields['includeFiles'] ?? null;
  }
  
  getIncludeFiles(): boolean | null {
      return this._fields['includeFiles'] ?? null;
  }

  setIncludeFiles(value: null | boolean) {
    this._fields['includeFiles'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'includeFiles')) {
      data['includeFiles'] = this['includeFiles'];
    }

    return data;
  }
}

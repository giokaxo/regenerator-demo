
export default class BlueSnapSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'enableMoto')) {
      this.setEnableMoto(data['enableMoto']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'salesTaxAmount')) {
      this.setSalesTaxAmount(data['salesTaxAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'metadataCustomField')) {
      this.setMetadataCustomField(data['metadataCustomField']);
    }
  }


  get enableMoto(): boolean | null {
    return this._fields['enableMoto'] ?? null;
  }
  
  getEnableMoto(): boolean | null {
      return this._fields['enableMoto'] ?? null;
  }

  setEnableMoto(value: null | boolean) {
    this._fields['enableMoto'] = value;

    return this;
  }

  get salesTaxAmount(): number | null {
    return this._fields['salesTaxAmount'] ?? null;
  }
  
  getSalesTaxAmount(): number | null {
      return this._fields['salesTaxAmount'] ?? null;
  }

  setSalesTaxAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['salesTaxAmount'] = value;

    return this;
  }

  get metadataCustomField(): string | null {
    return this._fields['metadataCustomField'] ?? null;
  }
  
  getMetadataCustomField(): string | null {
      return this._fields['metadataCustomField'] ?? null;
  }

  setMetadataCustomField(value: null | string) {
    this._fields['metadataCustomField'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enableMoto')) {
      data['enableMoto'] = this['enableMoto'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'salesTaxAmount')) {
      data['salesTaxAmount'] = this['salesTaxAmount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'metadataCustomField')) {
      data['metadataCustomField'] = this['metadataCustomField'];
    }

    return data;
  }
}

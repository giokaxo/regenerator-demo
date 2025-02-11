
export default class CheckoutFormCustomizationTracking {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'googleAnalytics')) {
      this.setGoogleAnalytics(data['googleAnalytics']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'googleTagManager')) {
      this.setGoogleTagManager(data['googleTagManager']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gtagJs')) {
      this.setGtagJs(data['gtagJs']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'facebookPixel')) {
      this.setFacebookPixel(data['facebookPixel']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'segmentAnalytics')) {
      this.setSegmentAnalytics(data['segmentAnalytics']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'heapIo')) {
      this.setHeapIo(data['heapIo']);
    }
  }


  get googleAnalytics(): string | null {
    return this._fields['googleAnalytics'] ?? null;
  }
  
  getGoogleAnalytics(): string | null {
      return this._fields['googleAnalytics'] ?? null;
  }

  setGoogleAnalytics(value: null | string) {
    this._fields['googleAnalytics'] = value;

    return this;
  }

  get googleTagManager(): string | null {
    return this._fields['googleTagManager'] ?? null;
  }
  
  getGoogleTagManager(): string | null {
      return this._fields['googleTagManager'] ?? null;
  }

  setGoogleTagManager(value: null | string) {
    this._fields['googleTagManager'] = value;

    return this;
  }

  get gtagJs(): string | null {
    return this._fields['gtagJs'] ?? null;
  }
  
  getGtagJs(): string | null {
      return this._fields['gtagJs'] ?? null;
  }

  setGtagJs(value: null | string) {
    this._fields['gtagJs'] = value;

    return this;
  }

  get facebookPixel(): string | null {
    return this._fields['facebookPixel'] ?? null;
  }
  
  getFacebookPixel(): string | null {
      return this._fields['facebookPixel'] ?? null;
  }

  setFacebookPixel(value: null | string) {
    this._fields['facebookPixel'] = value;

    return this;
  }

  get segmentAnalytics(): string | null {
    return this._fields['segmentAnalytics'] ?? null;
  }
  
  getSegmentAnalytics(): string | null {
      return this._fields['segmentAnalytics'] ?? null;
  }

  setSegmentAnalytics(value: null | string) {
    this._fields['segmentAnalytics'] = value;

    return this;
  }

  get heapIo(): string | null {
    return this._fields['heapIo'] ?? null;
  }
  
  getHeapIo(): string | null {
      return this._fields['heapIo'] ?? null;
  }

  setHeapIo(value: null | string) {
    this._fields['heapIo'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'googleAnalytics')) {
      data['googleAnalytics'] = this['googleAnalytics'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'googleTagManager')) {
      data['googleTagManager'] = this['googleTagManager'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gtagJs')) {
      data['gtagJs'] = this['gtagJs'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'facebookPixel')) {
      data['facebookPixel'] = this['facebookPixel'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'segmentAnalytics')) {
      data['segmentAnalytics'] = this['segmentAnalytics'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'heapIo')) {
      data['heapIo'] = this['heapIo'];
    }

    return data;
  }
}

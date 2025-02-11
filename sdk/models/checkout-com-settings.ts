
export default class CheckoutComSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'markAsWaitingGatewayOnPendingPayout')) {
      this.setMarkAsWaitingGatewayOnPendingPayout(data['markAsWaitingGatewayOnPendingPayout']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subEntityIdWebsiteCustomField')) {
      this.setSubEntityIdWebsiteCustomField(data['subEntityIdWebsiteCustomField']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'processingChannelId')) {
      this.setProcessingChannelId(data['processingChannelId']);
    }
  }


  get markAsWaitingGatewayOnPendingPayout(): boolean | null {
    return this._fields['markAsWaitingGatewayOnPendingPayout'] ?? null;
  }
  
  getMarkAsWaitingGatewayOnPendingPayout(): boolean | null {
      return this._fields['markAsWaitingGatewayOnPendingPayout'] ?? null;
  }

  setMarkAsWaitingGatewayOnPendingPayout(value: null | boolean) {
    this._fields['markAsWaitingGatewayOnPendingPayout'] = value;

    return this;
  }

  get subEntityIdWebsiteCustomField(): string | null {
    return this._fields['subEntityIdWebsiteCustomField'] ?? null;
  }
  
  getSubEntityIdWebsiteCustomField(): string | null {
      return this._fields['subEntityIdWebsiteCustomField'] ?? null;
  }

  setSubEntityIdWebsiteCustomField(value: null | string) {
    this._fields['subEntityIdWebsiteCustomField'] = value;

    return this;
  }

  get processingChannelId(): string | null {
    return this._fields['processingChannelId'] ?? null;
  }
  
  getProcessingChannelId(): string | null {
      return this._fields['processingChannelId'] ?? null;
  }

  setProcessingChannelId(value: null | string) {
    this._fields['processingChannelId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'markAsWaitingGatewayOnPendingPayout')) {
      data['markAsWaitingGatewayOnPendingPayout'] = this['markAsWaitingGatewayOnPendingPayout'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subEntityIdWebsiteCustomField')) {
      data['subEntityIdWebsiteCustomField'] = this['subEntityIdWebsiteCustomField'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'processingChannelId')) {
      data['processingChannelId'] = this['processingChannelId'];
    }

    return data;
  }
}


export default class GetKycAcceptanceSummaryReportResponseDataStatusStatisticsRejected {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'total')) {
      this.setTotal(data['total']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'automatically')) {
      this.setAutomatically(data['automatically']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'manually')) {
      this.setManually(data['manually']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'afterAutoAccepted')) {
      this.setAfterAutoAccepted(data['afterAutoAccepted']);
    }
  }


  get total(): number | null {
    return this._fields['total'] ?? null;
  }
  
  getTotal(): number | null {
      return this._fields['total'] ?? null;
  }

  setTotal(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['total'] = value;

    return this;
  }

  get automatically(): number | null {
    return this._fields['automatically'] ?? null;
  }
  
  getAutomatically(): number | null {
      return this._fields['automatically'] ?? null;
  }

  setAutomatically(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['automatically'] = value;

    return this;
  }

  get manually(): number | null {
    return this._fields['manually'] ?? null;
  }
  
  getManually(): number | null {
      return this._fields['manually'] ?? null;
  }

  setManually(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['manually'] = value;

    return this;
  }

  get afterAutoAccepted(): number | null {
    return this._fields['afterAutoAccepted'] ?? null;
  }
  
  getAfterAutoAccepted(): number | null {
      return this._fields['afterAutoAccepted'] ?? null;
  }

  setAfterAutoAccepted(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['afterAutoAccepted'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'total')) {
      data['total'] = this['total'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'automatically')) {
      data['automatically'] = this['automatically'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'manually')) {
      data['manually'] = this['manually'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'afterAutoAccepted')) {
      data['afterAutoAccepted'] = this['afterAutoAccepted'];
    }

    return data;
  }
}

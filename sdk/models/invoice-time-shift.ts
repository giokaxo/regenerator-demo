import InvoiceTimeShiftIssueTimeShift from '../models/invoice-time-shift-issue-time-shift';
import InvoiceTimeShiftDueTimeShift from '../models/invoice-time-shift-due-time-shift';

export default class InvoiceTimeShift {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'issueTimeShift')) {
      this.setIssueTimeShift(data['issueTimeShift']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'dueTimeShift')) {
      this.setDueTimeShift(data['dueTimeShift']);
    }
  }


  get issueTimeShift(): InvoiceTimeShiftIssueTimeShift | null {
    return this._fields['issueTimeShift'] ?? null;
  }
  
  getIssueTimeShift(): InvoiceTimeShiftIssueTimeShift | null {
      return this._fields['issueTimeShift'] ?? null;
  }

  setIssueTimeShift(value: null | InvoiceTimeShiftIssueTimeShift | any) {
    if (value !== null && !(value instanceof InvoiceTimeShiftIssueTimeShift)) {
      value = new InvoiceTimeShiftIssueTimeShift(value);
    }

    this._fields['issueTimeShift'] = value;

    return this;
  }

  get dueTimeShift(): InvoiceTimeShiftDueTimeShift | null {
    return this._fields['dueTimeShift'] ?? null;
  }
  
  getDueTimeShift(): InvoiceTimeShiftDueTimeShift | null {
      return this._fields['dueTimeShift'] ?? null;
  }

  setDueTimeShift(value: null | InvoiceTimeShiftDueTimeShift | any) {
    if (value !== null && !(value instanceof InvoiceTimeShiftDueTimeShift)) {
      value = new InvoiceTimeShiftDueTimeShift(value);
    }

    this._fields['dueTimeShift'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'issueTimeShift')) {
      data['issueTimeShift'] = this['issueTimeShift']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dueTimeShift')) {
      data['dueTimeShift'] = this['dueTimeShift']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

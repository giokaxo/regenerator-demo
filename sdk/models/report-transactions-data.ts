
export default class ReportTransactionsData {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'aggregationFieldValue')) {
      this.setAggregationFieldValue(data['aggregationFieldValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authApprovedThroughput')) {
      this.setAuthApprovedThroughput(data['authApprovedThroughput']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'approvedThroughput')) {
      this.setApprovedThroughput(data['approvedThroughput']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authApprovalCount')) {
      this.setAuthApprovalCount(data['authApprovalCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'disputesRate')) {
      this.setDisputesRate(data['disputesRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'disputesCount')) {
      this.setDisputesCount(data['disputesCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'salesCount')) {
      this.setSalesCount(data['salesCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'salesValue')) {
      this.setSalesValue(data['salesValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'salesAverage')) {
      this.setSalesAverage(data['salesAverage']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'refundsCount')) {
      this.setRefundsCount(data['refundsCount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'refundsValue')) {
      this.setRefundsValue(data['refundsValue']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'count')) {
      this.setCount(data['count']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'unapprovedCount')) {
      this.setUnapprovedCount(data['unapprovedCount']);
    }
  }


  get aggregationFieldValue(): string | null {
    return this._fields['aggregationFieldValue'] ?? null;
  }
  
  getAggregationFieldValue(): string | null {
      return this._fields['aggregationFieldValue'] ?? null;
  }

  setAggregationFieldValue(value: null | string) {
    this._fields['aggregationFieldValue'] = value;

    return this;
  }

  get authApprovedThroughput(): number | null {
    return this._fields['authApprovedThroughput'] ?? null;
  }
  
  getAuthApprovedThroughput(): number | null {
      return this._fields['authApprovedThroughput'] ?? null;
  }

  setAuthApprovedThroughput(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['authApprovedThroughput'] = value;

    return this;
  }

  get approvedThroughput(): number | null {
    return this._fields['approvedThroughput'] ?? null;
  }
  
  getApprovedThroughput(): number | null {
      return this._fields['approvedThroughput'] ?? null;
  }

  setApprovedThroughput(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['approvedThroughput'] = value;

    return this;
  }

  get authApprovalCount(): number | null {
    return this._fields['authApprovalCount'] ?? null;
  }
  
  getAuthApprovalCount(): number | null {
      return this._fields['authApprovalCount'] ?? null;
  }

  setAuthApprovalCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['authApprovalCount'] = value;

    return this;
  }

  get disputesRate(): number | null {
    return this._fields['disputesRate'] ?? null;
  }
  
  getDisputesRate(): number | null {
      return this._fields['disputesRate'] ?? null;
  }

  setDisputesRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['disputesRate'] = value;

    return this;
  }

  get disputesCount(): number | null {
    return this._fields['disputesCount'] ?? null;
  }
  
  getDisputesCount(): number | null {
      return this._fields['disputesCount'] ?? null;
  }

  setDisputesCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['disputesCount'] = value;

    return this;
  }

  get salesCount(): number | null {
    return this._fields['salesCount'] ?? null;
  }
  
  getSalesCount(): number | null {
      return this._fields['salesCount'] ?? null;
  }

  setSalesCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['salesCount'] = value;

    return this;
  }

  get salesValue(): number | null {
    return this._fields['salesValue'] ?? null;
  }
  
  getSalesValue(): number | null {
      return this._fields['salesValue'] ?? null;
  }

  setSalesValue(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['salesValue'] = value;

    return this;
  }

  get salesAverage(): number | null {
    return this._fields['salesAverage'] ?? null;
  }
  
  getSalesAverage(): number | null {
      return this._fields['salesAverage'] ?? null;
  }

  setSalesAverage(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['salesAverage'] = value;

    return this;
  }

  get refundsCount(): number | null {
    return this._fields['refundsCount'] ?? null;
  }
  
  getRefundsCount(): number | null {
      return this._fields['refundsCount'] ?? null;
  }

  setRefundsCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['refundsCount'] = value;

    return this;
  }

  get refundsValue(): number | null {
    return this._fields['refundsValue'] ?? null;
  }
  
  getRefundsValue(): number | null {
      return this._fields['refundsValue'] ?? null;
  }

  setRefundsValue(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['refundsValue'] = value;

    return this;
  }

  get amount(): number | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): number | null {
      return this._fields['amount'] ?? null;
  }

  setAmount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get count(): number | null {
    return this._fields['count'] ?? null;
  }
  
  getCount(): number | null {
      return this._fields['count'] ?? null;
  }

  setCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['count'] = value;

    return this;
  }

  get unapprovedCount(): number | null {
    return this._fields['unapprovedCount'] ?? null;
  }
  
  getUnapprovedCount(): number | null {
      return this._fields['unapprovedCount'] ?? null;
  }

  setUnapprovedCount(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['unapprovedCount'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'aggregationFieldValue')) {
      data['aggregationFieldValue'] = this['aggregationFieldValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authApprovedThroughput')) {
      data['authApprovedThroughput'] = this['authApprovedThroughput'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'approvedThroughput')) {
      data['approvedThroughput'] = this['approvedThroughput'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authApprovalCount')) {
      data['authApprovalCount'] = this['authApprovalCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disputesRate')) {
      data['disputesRate'] = this['disputesRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'disputesCount')) {
      data['disputesCount'] = this['disputesCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'salesCount')) {
      data['salesCount'] = this['salesCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'salesValue')) {
      data['salesValue'] = this['salesValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'salesAverage')) {
      data['salesAverage'] = this['salesAverage'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'refundsCount')) {
      data['refundsCount'] = this['refundsCount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'refundsValue')) {
      data['refundsValue'] = this['refundsValue'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'count')) {
      data['count'] = this['count'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'unapprovedCount')) {
      data['unapprovedCount'] = this['unapprovedCount'];
    }

    return data;
  }
}


export default class ThreeDSecureIO3dsServer {
  NAME_THREE_D_SECURE_IO3DS_SERVER = 'ThreeDSecureIO3dsServer';

  TRANSACTION_TYPE_01 = '01';

  TRANSACTION_TYPE_03 = '03';

  TRANSACTION_TYPE_10 = '10';

  TRANSACTION_TYPE_11 = '11';

  TRANSACTION_TYPE_28 = '28';

  THREE_RI_IND_01 = '01';

  THREE_RI_IND_02 = '02';

  THREE_RI_IND_03 = '03';

  THREE_RI_IND_04 = '04';

  THREE_RI_IND_05 = '05';

  THREE_RI_IND_06 = '06';

  THREE_RI_IND_07 = '07';

  THREE_RI_IND_08 = '08';

  THREE_RI_IND_09 = '09';

  THREE_RI_IND_10 = '10';

  THREE_RI_IND_11 = '11';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acquirerMerchantIdVisa')) {
      this.setAcquirerMerchantIdVisa(data['acquirerMerchantIdVisa']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acquirerMerchantIdMastercard')) {
      this.setAcquirerMerchantIdMastercard(data['acquirerMerchantIdMastercard']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acquirerMerchantIdAmex')) {
      this.setAcquirerMerchantIdAmex(data['acquirerMerchantIdAmex']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acquirerMerchantIdDiscover')) {
      this.setAcquirerMerchantIdDiscover(data['acquirerMerchantIdDiscover']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acquirerMerchantIdJcb')) {
      this.setAcquirerMerchantIdJcb(data['acquirerMerchantIdJcb']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantName')) {
      this.setMerchantName(data['merchantName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAcquirerBinVisa')) {
      this.setMerchantAcquirerBinVisa(data['merchantAcquirerBinVisa']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAcquirerBinMastercard')) {
      this.setMerchantAcquirerBinMastercard(data['merchantAcquirerBinMastercard']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAcquirerBinAmex')) {
      this.setMerchantAcquirerBinAmex(data['merchantAcquirerBinAmex']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAcquirerBinDiscover')) {
      this.setMerchantAcquirerBinDiscover(data['merchantAcquirerBinDiscover']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantAcquirerBinJcb')) {
      this.setMerchantAcquirerBinJcb(data['merchantAcquirerBinJcb']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantCountry')) {
      this.setMerchantCountry(data['merchantCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'merchantUrl')) {
      this.setMerchantUrl(data['merchantUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'transactionType')) {
      this.setTransactionType(data['transactionType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'declineNotEnrolled')) {
      this.setDeclineNotEnrolled(data['declineNotEnrolled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'use3dsForMerchantInitiated')) {
      this.setUse3dsForMerchantInitiated(data['use3dsForMerchantInitiated']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'threeRIInd')) {
      this.setThreeRIInd(data['threeRIInd']);
    }
  }


  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get acquirerMerchantIdVisa(): string {
    return this._fields['acquirerMerchantIdVisa'];
  }
  
  getAcquirerMerchantIdVisa(): string {
      return this._fields['acquirerMerchantIdVisa'];
  }

  setAcquirerMerchantIdVisa(value: string) {
    this._fields['acquirerMerchantIdVisa'] = value;

    return this;
  }

  get acquirerMerchantIdMastercard(): string {
    return this._fields['acquirerMerchantIdMastercard'];
  }
  
  getAcquirerMerchantIdMastercard(): string {
      return this._fields['acquirerMerchantIdMastercard'];
  }

  setAcquirerMerchantIdMastercard(value: string) {
    this._fields['acquirerMerchantIdMastercard'] = value;

    return this;
  }

  get acquirerMerchantIdAmex(): string | null {
    return this._fields['acquirerMerchantIdAmex'] ?? null;
  }
  
  getAcquirerMerchantIdAmex(): string | null {
      return this._fields['acquirerMerchantIdAmex'] ?? null;
  }

  setAcquirerMerchantIdAmex(value: null | string) {
    this._fields['acquirerMerchantIdAmex'] = value;

    return this;
  }

  get acquirerMerchantIdDiscover(): string | null {
    return this._fields['acquirerMerchantIdDiscover'] ?? null;
  }
  
  getAcquirerMerchantIdDiscover(): string | null {
      return this._fields['acquirerMerchantIdDiscover'] ?? null;
  }

  setAcquirerMerchantIdDiscover(value: null | string) {
    this._fields['acquirerMerchantIdDiscover'] = value;

    return this;
  }

  get acquirerMerchantIdJcb(): string | null {
    return this._fields['acquirerMerchantIdJcb'] ?? null;
  }
  
  getAcquirerMerchantIdJcb(): string | null {
      return this._fields['acquirerMerchantIdJcb'] ?? null;
  }

  setAcquirerMerchantIdJcb(value: null | string) {
    this._fields['acquirerMerchantIdJcb'] = value;

    return this;
  }

  get merchantName(): string {
    return this._fields['merchantName'];
  }
  
  getMerchantName(): string {
      return this._fields['merchantName'];
  }

  setMerchantName(value: string) {
    this._fields['merchantName'] = value;

    return this;
  }

  get merchantAcquirerBinVisa(): string {
    return this._fields['merchantAcquirerBinVisa'];
  }
  
  getMerchantAcquirerBinVisa(): string {
      return this._fields['merchantAcquirerBinVisa'];
  }

  setMerchantAcquirerBinVisa(value: string) {
    this._fields['merchantAcquirerBinVisa'] = value;

    return this;
  }

  get merchantAcquirerBinMastercard(): string {
    return this._fields['merchantAcquirerBinMastercard'];
  }
  
  getMerchantAcquirerBinMastercard(): string {
      return this._fields['merchantAcquirerBinMastercard'];
  }

  setMerchantAcquirerBinMastercard(value: string) {
    this._fields['merchantAcquirerBinMastercard'] = value;

    return this;
  }

  get merchantAcquirerBinAmex(): string | null {
    return this._fields['merchantAcquirerBinAmex'] ?? null;
  }
  
  getMerchantAcquirerBinAmex(): string | null {
      return this._fields['merchantAcquirerBinAmex'] ?? null;
  }

  setMerchantAcquirerBinAmex(value: null | string) {
    this._fields['merchantAcquirerBinAmex'] = value;

    return this;
  }

  get merchantAcquirerBinDiscover(): string | null {
    return this._fields['merchantAcquirerBinDiscover'] ?? null;
  }
  
  getMerchantAcquirerBinDiscover(): string | null {
      return this._fields['merchantAcquirerBinDiscover'] ?? null;
  }

  setMerchantAcquirerBinDiscover(value: null | string) {
    this._fields['merchantAcquirerBinDiscover'] = value;

    return this;
  }

  get merchantAcquirerBinJcb(): string | null {
    return this._fields['merchantAcquirerBinJcb'] ?? null;
  }
  
  getMerchantAcquirerBinJcb(): string | null {
      return this._fields['merchantAcquirerBinJcb'] ?? null;
  }

  setMerchantAcquirerBinJcb(value: null | string) {
    this._fields['merchantAcquirerBinJcb'] = value;

    return this;
  }

  get merchantCountry(): string {
    return this._fields['merchantCountry'];
  }
  
  getMerchantCountry(): string {
      return this._fields['merchantCountry'];
  }

  setMerchantCountry(value: string) {
    this._fields['merchantCountry'] = value;

    return this;
  }

  get merchantUrl(): string {
    return this._fields['merchantUrl'];
  }
  
  getMerchantUrl(): string {
      return this._fields['merchantUrl'];
  }

  setMerchantUrl(value: string) {
    this._fields['merchantUrl'] = value;

    return this;
  }

  get transactionType(): string {
    return this._fields['transactionType'];
  }
  
  getTransactionType(): string {
      return this._fields['transactionType'];
  }

  setTransactionType(value: string) {
    this._fields['transactionType'] = value;

    return this;
  }

  get declineNotEnrolled(): boolean | null {
    return this._fields['declineNotEnrolled'] ?? null;
  }
  
  getDeclineNotEnrolled(): boolean | null {
      return this._fields['declineNotEnrolled'] ?? null;
  }

  setDeclineNotEnrolled(value: null | boolean) {
    this._fields['declineNotEnrolled'] = value;

    return this;
  }

  get use3dsForMerchantInitiated(): boolean | null {
    return this._fields['use3dsForMerchantInitiated'] ?? null;
  }
  
  getUse3dsForMerchantInitiated(): boolean | null {
      return this._fields['use3dsForMerchantInitiated'] ?? null;
  }

  setUse3dsForMerchantInitiated(value: null | boolean) {
    this._fields['use3dsForMerchantInitiated'] = value;

    return this;
  }

  get threeRIInd(): string | null {
    return this._fields['threeRIInd'] ?? null;
  }
  
  getThreeRIInd(): string | null {
      return this._fields['threeRIInd'] ?? null;
  }

  setThreeRIInd(value: null | string) {
    this._fields['threeRIInd'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acquirerMerchantIdVisa')) {
      data['acquirerMerchantIdVisa'] = this['acquirerMerchantIdVisa'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acquirerMerchantIdMastercard')) {
      data['acquirerMerchantIdMastercard'] = this['acquirerMerchantIdMastercard'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acquirerMerchantIdAmex')) {
      data['acquirerMerchantIdAmex'] = this['acquirerMerchantIdAmex'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acquirerMerchantIdDiscover')) {
      data['acquirerMerchantIdDiscover'] = this['acquirerMerchantIdDiscover'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acquirerMerchantIdJcb')) {
      data['acquirerMerchantIdJcb'] = this['acquirerMerchantIdJcb'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantName')) {
      data['merchantName'] = this['merchantName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAcquirerBinVisa')) {
      data['merchantAcquirerBinVisa'] = this['merchantAcquirerBinVisa'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAcquirerBinMastercard')) {
      data['merchantAcquirerBinMastercard'] = this['merchantAcquirerBinMastercard'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAcquirerBinAmex')) {
      data['merchantAcquirerBinAmex'] = this['merchantAcquirerBinAmex'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAcquirerBinDiscover')) {
      data['merchantAcquirerBinDiscover'] = this['merchantAcquirerBinDiscover'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantAcquirerBinJcb')) {
      data['merchantAcquirerBinJcb'] = this['merchantAcquirerBinJcb'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantCountry')) {
      data['merchantCountry'] = this['merchantCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantUrl')) {
      data['merchantUrl'] = this['merchantUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionType')) {
      data['transactionType'] = this['transactionType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'declineNotEnrolled')) {
      data['declineNotEnrolled'] = this['declineNotEnrolled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'use3dsForMerchantInitiated')) {
      data['use3dsForMerchantInitiated'] = this['use3dsForMerchantInitiated'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'threeRIInd')) {
      data['threeRIInd'] = this['threeRIInd'];
    }

    return data;
  }
}

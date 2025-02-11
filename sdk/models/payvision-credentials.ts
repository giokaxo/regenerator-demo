
export default class PayvisionCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'memberId')) {
      this.setMemberId(data['memberId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'memberGuid')) {
      this.setMemberGuid(data['memberGuid']);
    }
  }


  get memberId(): string {
    return this._fields['memberId'];
  }
  
  getMemberId(): string {
      return this._fields['memberId'];
  }

  setMemberId(value: string) {
    this._fields['memberId'] = value;

    return this;
  }

  get memberGuid(): string {
    return this._fields['memberGuid'];
  }
  
  getMemberGuid(): string {
      return this._fields['memberGuid'];
  }

  setMemberGuid(value: string) {
    this._fields['memberGuid'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'memberId')) {
      data['memberId'] = this['memberId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'memberGuid')) {
      data['memberGuid'] = this['memberGuid'];
    }

    return data;
  }
}

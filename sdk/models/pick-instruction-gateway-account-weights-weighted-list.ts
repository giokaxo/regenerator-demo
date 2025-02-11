
export default class PickInstructionGatewayAccountWeightsWeightedList {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayAccountId')) {
      this.setGatewayAccountId(data['gatewayAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'weight')) {
      this.setWeight(data['weight']);
    }
  }


  get gatewayAccountId(): string {
    return this._fields['gatewayAccountId'];
  }
  
  getGatewayAccountId(): string {
      return this._fields['gatewayAccountId'];
  }

  setGatewayAccountId(value: string) {
    this._fields['gatewayAccountId'] = value;

    return this;
  }

  get weight(): number {
    return this._fields['weight'];
  }
  
  getWeight(): number {
      return this._fields['weight'];
  }

  setWeight(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['weight'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayAccountId')) {
      data['gatewayAccountId'] = this['gatewayAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'weight')) {
      data['weight'] = this['weight'];
    }

    return data;
  }
}

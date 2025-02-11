import PickInstructionGatewayAcquirerWeightsWeightedList from '../models/pick-instruction-gateway-acquirer-weights-weighted-list';
import GatewayAccountPickInstruction from '../models/gateway-account-pick-instruction';

export default class PickInstructionGatewayAcquirerWeights extends GatewayAccountPickInstruction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      method: 'gateway-acquirer-weights',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'weightedList')) {
      this.setWeightedList(data['weightedList']);
    }
  }


  get weightedList(): Array<any> {
    return this._fields['weightedList'];
  }
  
  getWeightedList(): Array<any> {
      return this._fields['weightedList'];
  }

  setWeightedList(value: Array<any>) {
    value = value.map(
      (value) => value instanceof PickInstructionGatewayAcquirerWeightsWeightedList ? value : new PickInstructionGatewayAcquirerWeightsWeightedList(value),
    );

    this._fields['weightedList'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'weightedList')) {
      data['weightedList'] = this['weightedList'].map(
          (pickInstructionGatewayAcquirerWeightsWeightedList: PickInstructionGatewayAcquirerWeightsWeightedList) => pickInstructionGatewayAcquirerWeightsWeightedList.jsonSerialize()
      );
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

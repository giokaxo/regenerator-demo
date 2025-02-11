import PickInstructionGatewayAccountWeightsWeightedList from '../models/pick-instruction-gateway-account-weights-weighted-list';
import GatewayAccountPickInstruction from '../models/gateway-account-pick-instruction';

export default class PickInstructionGatewayAccountWeights extends GatewayAccountPickInstruction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      method: 'gateway-account-weights',
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
      (value) => value instanceof PickInstructionGatewayAccountWeightsWeightedList ? value : new PickInstructionGatewayAccountWeightsWeightedList(value),
    );

    this._fields['weightedList'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'weightedList')) {
      data['weightedList'] = this['weightedList'].map(
          (pickInstructionGatewayAccountWeightsWeightedList: PickInstructionGatewayAccountWeightsWeightedList) => pickInstructionGatewayAccountWeightsWeightedList.jsonSerialize()
      );
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

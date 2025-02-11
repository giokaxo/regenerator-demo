import GatewayAccountPickInstruction from '../models/gateway-account-pick-instruction';
import RuleAction from '../models/rule-action';

export default class RuleActionPickGatewayAccount extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'pick-gateway-account',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'pickInstruction')) {
      this.setPickInstruction(data['pickInstruction']);
    }
  }


  get pickInstruction(): GatewayAccountPickInstruction {
    return this._fields['pickInstruction'];
  }
  
  getPickInstruction(): GatewayAccountPickInstruction {
      return this._fields['pickInstruction'];
  }

  setPickInstruction(value: GatewayAccountPickInstruction | any) {
    if (!(value instanceof GatewayAccountPickInstruction)) {
      value = new GatewayAccountPickInstruction(value);
    }

    this._fields['pickInstruction'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pickInstruction')) {
      data['pickInstruction'] = this['pickInstruction'].jsonSerialize();
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

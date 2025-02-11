import PickInstructionGatewayAccountWeights from '../models/pick-instruction-gateway-account-weights';
import PickInstructionGatewayAcquirerWeights from '../models/pick-instruction-gateway-acquirer-weights';

export default class GatewayAccountPickInstruction {
  STRATEGY_WEIGHTED_RANDOM = 'weighted-random';

  STRATEGY_ROUND_ROBIN = 'round-robin';

  METHOD_ACCOUNT_WEIGHTS = 'gateway-account-weights';

  METHOD_ACQUIRER_WEIGHTS = 'gateway-acquirer-weights';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'strategy')) {
      this.setStrategy(data['strategy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
  }


  get strategy(): string | null {
    return this._fields['strategy'] ?? null;
  }
  
  getStrategy(): string | null {
      return this._fields['strategy'] ?? null;
  }

  setStrategy(value: null | string) {
    this._fields['strategy'] = value;

    return this;
  }

  get method(): string {
    return this._fields['method'];
  }
  
  getMethod(): string {
      return this._fields['method'];
  }

  private setMethod(value: string) {
    this._fields['method'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'strategy')) {
      data['strategy'] = this['strategy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }

    return data;
  }
}

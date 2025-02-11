import PickInstructionGatewayAccountWeights from '../models/pick-instruction-gateway-account-weights';
import PickInstructionGatewayAcquirerWeights from '../models/pick-instruction-gateway-acquirer-weights';
import GatewayAccountPickInstruction from '../models/gateway-account-pick-instruction';

export default class GatewayAccountPickInstructionFactory {
  static from(data: any = {}): GatewayAccountPickInstruction {
    switch(data.method) {
      case 'gateway-account-weights': return new PickInstructionGatewayAccountWeights(data);
      case 'gateway-acquirer-weights': return new PickInstructionGatewayAcquirerWeights(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

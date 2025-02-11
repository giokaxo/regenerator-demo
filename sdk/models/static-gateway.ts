import GatewayAccount from '../models/gateway-account';

export default class StaticGateway extends GatewayAccount {
  constructor(data: any = {}) {
    super({
      ...data,
      gatewayName: 'StaticGateway',
    });
  }


}

import TransactionGatewayResponse from '../models/transaction-gateway-response';
import TransactionGatewayAvsResponse from '../models/transaction-gateway-avs-response';
import TransactionGatewayCvvResponse from '../models/transaction-gateway-cvv-response';

export default class TransactionGateway {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'response')) {
      this.setResponse(data['response']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'avsResponse')) {
      this.setAvsResponse(data['avsResponse']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cvvResponse')) {
      this.setCvvResponse(data['cvvResponse']);
    }
  }


  get response(): TransactionGatewayResponse | null {
    return this._fields['response'] ?? null;
  }
  
  getResponse(): TransactionGatewayResponse | null {
      return this._fields['response'] ?? null;
  }

  setResponse(value: null | TransactionGatewayResponse | any) {
    if (value !== null && !(value instanceof TransactionGatewayResponse)) {
      value = new TransactionGatewayResponse(value);
    }

    this._fields['response'] = value;

    return this;
  }

  get avsResponse(): TransactionGatewayAvsResponse | null {
    return this._fields['avsResponse'] ?? null;
  }
  
  getAvsResponse(): TransactionGatewayAvsResponse | null {
      return this._fields['avsResponse'] ?? null;
  }

  setAvsResponse(value: null | TransactionGatewayAvsResponse | any) {
    if (value !== null && !(value instanceof TransactionGatewayAvsResponse)) {
      value = new TransactionGatewayAvsResponse(value);
    }

    this._fields['avsResponse'] = value;

    return this;
  }

  get cvvResponse(): TransactionGatewayCvvResponse | null {
    return this._fields['cvvResponse'] ?? null;
  }
  
  getCvvResponse(): TransactionGatewayCvvResponse | null {
      return this._fields['cvvResponse'] ?? null;
  }

  setCvvResponse(value: null | TransactionGatewayCvvResponse | any) {
    if (value !== null && !(value instanceof TransactionGatewayCvvResponse)) {
      value = new TransactionGatewayCvvResponse(value);
    }

    this._fields['cvvResponse'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'response')) {
      data['response'] = this['response']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'avsResponse')) {
      data['avsResponse'] = this['avsResponse']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cvvResponse')) {
      data['cvvResponse'] = this['cvvResponse']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

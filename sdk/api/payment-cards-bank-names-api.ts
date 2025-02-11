import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import GetPaymentCardBankNameCollectionResponse from '../models/get-payment-card-bank-name-collection-response';


export default class PaymentCardsBankNamesApi {
  constructor(private client: Client) {}
  async getAll({ 
    limit = null,
    q = null }: {
    limit?: number | null,
    q?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
    const uri = '/payment-cards-bank-names?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return response.data.map((item: any) => new GetPaymentCardBankNameCollectionResponse(item));
  }}

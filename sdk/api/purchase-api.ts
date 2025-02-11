import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import PostReadyToPayFactory from '../factories/post-ready-to-pay-factory';
import ReadyToPayMethodsFactory from '../factories/ready-to-pay-methods-factory';
import PostReadyToPay from '../models/post-ready-to-pay';
import ReadyToPayMethods from '../models/ready-to-pay-methods';


export default class PurchaseApi {
  constructor(private client: Client) {}
  async readyToPay({ 
    postReadyToPay }: {
    postReadyToPay: PostReadyToPay
  })  {
    const uri = '/ready-to-pay';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: postReadyToPay.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
  
    return response.data.map((item: any) => ReadyToPayMethodsFactory.from(item));
  }}

import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import PostPayoutRequest from '../models/post-payout-request';
import Transaction from '../models/transaction';


export default class PayoutsApi {
  constructor(private client: Client) {}
  async create({ 
    postPayoutRequest }: {
    postPayoutRequest: PostPayoutRequest
  })  {
    const uri = '/payouts';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: postPayoutRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Transaction(response.data);
  }}

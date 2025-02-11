import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import SendThroughAttribution from '../models/send-through-attribution';


export default class SendThroughAttributionApi {
  constructor(private client: Client) {}
  async getAll({ 
    eventType }: {
    eventType: string
  })  {
    const pathParams = {eventType: eventType};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/send-through-attribution/{eventType}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return response.data.map((item: any) => new SendThroughAttribution(item));
  }}

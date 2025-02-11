import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import OrderPreview from '../models/order-preview';
import RulesEmailNotification from '../models/rules-email-notification';
import GlobalWebhook from '../models/global-webhook';


export default class PreviewsApi {
  constructor(private client: Client) {}
  async order({ 
    orderPreview }: {
    orderPreview: OrderPreview
  })  {
    const uri = '/previews/orders';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: orderPreview.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new OrderPreview(response.data);
  }
  async sendEmailRuleAction({ 
    rulesEmailNotification }: {
    rulesEmailNotification: RulesEmailNotification
  })  {
    const uri = '/previews/rule-actions/send-email';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: rulesEmailNotification.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new RulesEmailNotification(response.data);
  }
  async webhook({ 
    globalWebhook }: {
    globalWebhook: GlobalWebhook
  })  {
    const uri = '/previews/webhooks';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      data: globalWebhook.jsonSerialize()
    };
    return this.client.send(requestConfig);
  }}

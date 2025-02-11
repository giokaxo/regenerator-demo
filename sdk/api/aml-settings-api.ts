import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import AmlSettings from '../models/aml-settings';


export default class AmlSettingsApi {
  constructor(private client: Client) {}
  async getAmlSettings({  }: {
  }= {})
   {
    const uri = '/aml-settings';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new AmlSettings(response.data);
  }
  async putAmlSettings({ 
    amlSettings }: {
    amlSettings: AmlSettings
  })  {
    const uri = '/aml-settings';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: amlSettings.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new AmlSettings(response.data);
  }}

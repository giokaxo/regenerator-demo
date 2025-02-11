import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import ExternalServiceSettings from '../models/external-service-settings';


export default class ExternalServicesSettingsApi {
  constructor(private client: Client) {}
  async getExternalServiceSettings({  }: {
  }= {})
   {
    const uri = '/external-services-settings';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ExternalServiceSettings(response.data);
  }
  async updateExternalServiceSettings({ 
    externalServiceSettings }: {
    externalServiceSettings: ExternalServiceSettings
  })  {
    const uri = '/external-services-settings';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: externalServiceSettings.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new ExternalServiceSettings(response.data);
  }}

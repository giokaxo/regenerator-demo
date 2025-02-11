import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import KycSettings from '../models/kyc-settings';


export default class KycSettingsApi {
  constructor(private client: Client) {}
  async getKycSettings({  }: {
  }= {})
   {
    const uri = '/kyc-settings';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new KycSettings(response.data);
  }
  async updateKycSettings({ 
    kycSettings }: {
    kycSettings: KycSettings
  })  {
    const uri = '/kyc-settings';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: kycSettings.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new KycSettings(response.data);
  }}

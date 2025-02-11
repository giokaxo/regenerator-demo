import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import ForgotPassword from '../models/forgot-password';


export default class AccountApi {
  constructor(private client: Client) {}
  async forgotPassword({ 
    forgotPassword }: {
    forgotPassword: ForgotPassword
  })  {
    const uri = '/forgot-password';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      data: forgotPassword.jsonSerialize()
    };
    return this.client.send(requestConfig);
  }}

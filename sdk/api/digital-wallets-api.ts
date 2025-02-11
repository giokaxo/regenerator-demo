import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import DigitalWalletValidation from '../models/digital-wallet-validation';
import DigitalWalletOnboardingApplePay from '../models/digital-wallet-onboarding-apple-pay';


export default class DigitalWalletsApi {
  constructor(private client: Client) {}
  async create({ 
    digitalWalletOnboardingApplePay }: {
    digitalWalletOnboardingApplePay: DigitalWalletOnboardingApplePay
  })  {
    const uri = '/digital-wallets/onboarding/apple-pay';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: digitalWalletOnboardingApplePay.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new DigitalWalletOnboardingApplePay(response.data);
  }
  async validate({ 
    digitalWalletValidation }: {
    digitalWalletValidation: DigitalWalletValidation
  })  {
    const uri = '/digital-wallets/validation';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: digitalWalletValidation.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new DigitalWalletValidation(response.data);
  }}

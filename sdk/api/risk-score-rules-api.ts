import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import RiskScoreRules from '../models/risk-score-rules';
import RiskScoreBlocklist from '../models/risk-score-blocklist';


export default class RiskScoreRulesApi {
  constructor(private client: Client) {}
  async getAll({  }: {
  }= {})
   {
    const uri = '/risk-score-rules';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RiskScoreRules(response.data);
  }
  async getAllBlocklistRules({  }: {
  }= {})
   {
    const uri = '/risk-score-rules/blocklists';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RiskScoreBlocklist(response.data);
  }
  async updateRiskScoreBlocklistRules({ 
    riskScoreBlocklist }: {
    riskScoreBlocklist: RiskScoreBlocklist
  })  {
    const uri = '/risk-score-rules/blocklists';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: riskScoreBlocklist.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new RiskScoreBlocklist(response.data);
  }
  async updateRiskScoreRules({ 
    riskScoreRules }: {
    riskScoreRules: RiskScoreRules
  })  {
    const uri = '/risk-score-rules';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: riskScoreRules.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new RiskScoreRules(response.data);
  }}

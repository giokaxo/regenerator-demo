import Client from '../sdk/client';
import Collection from '../sdk/collection';

export let client: Client;
export let storedApiKey = '';
export const outputEl = document.getElementById('output') as HTMLPreElement;
export const apiKeyInput = document.getElementById('api-key') as HTMLInputElement;
export const renderEl = document.getElementById('render') as HTMLDivElement;
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function initClient(apiKey: string) {
  client = new Client({
    apiKey,
  });
}

export function showOutput(data: Collection | string) {
  outputEl.textContent = JSON.stringify(data, null, 2);
}

export function renderList(data: Collection, callback: (item: any) => Record<string, any>) {
  const list = document.createDocumentFragment();
  for (const item of data) {
    const el = document.createElement('div');
    el.classList.add('product');
    for (const field of Object.keys(callback(item))) {
      const value = callback(item)[field];
      const key = field.replace(/([A-Z])/g, ' $1').replace(/^./, function (str: string) {
        return str.toUpperCase();
      });
      el.innerHTML += `<p>${key}: ${value}</p>`;
    }
    list.appendChild(el);
  }
  renderEl.appendChild(list);
}

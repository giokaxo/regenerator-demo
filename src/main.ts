import './style.css';
import Client from '../sdk/client';
import Collection from '../sdk/collection';

const outputEl = document.getElementById('output') as HTMLPreElement;
const client = new Client({
  apiKey: 'sk_sandbox_f6SPfpm_EbhKtbqbgzjG5vF8YuT7DgvXRZbUjVS',
});

function showOutput(data: Collection | string) {
  outputEl.textContent = JSON.stringify(data, null, 2);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
document.addEventListener('click', async (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('fetch-button')) {
    const action = target.dataset.fetch;
    showOutput('Loading...');
    await sleep(1000);
    switch (action) {
      case 'api-keys':
        showOutput(await client.apiKeys.getAll());
        break;
      case 'customers':
        showOutput(await client.customers.getAll());
        break;
      case 'value-lists':
        showOutput(await client.lists.getAll());
        break;
      case 'applications':
    }
  }
});

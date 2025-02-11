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
        fetchApiKeys();
        break;
      case 'customers':
        fetchCustomers();
        break;
      case 'value-lists':
        fetchValueLists();
        break;
      case 'applications':
    }
  }
});

async function fetchCustomers() {
  const customersCollection = await client.customers.getAll();
  console.log(customersCollection);
  showOutput(customersCollection);
}

async function fetchApiKeys() {
  const apiKeysCollection = await client.apiKeys.getAll();
  console.log(apiKeysCollection);
  showOutput(apiKeysCollection);
}

async function fetchValueLists() {
  const valueListsCollection = await client.lists.getAll();
  console.log(valueListsCollection);
  showOutput(valueListsCollection);
}

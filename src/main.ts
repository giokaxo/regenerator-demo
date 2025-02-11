import './style.css';
import Client from '../sdk/client';
import Collection from '../sdk/collection';

let client: Client;
let storedApiKey = '';
const outputEl = document.getElementById('output') as HTMLPreElement;
const apiKeyInput = document.getElementById('api-key') as HTMLInputElement;

function initClient(apiKey: string) {
  client = new Client({
    apiKey,
  });
}

function showOutput(data: Collection | string) {
  outputEl.textContent = JSON.stringify(data, null, 2);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
document.addEventListener('click', async (event) => {
  const target = event.target as HTMLElement;
  if (!target.classList.contains('fetch-button')) {
    return;
  }
  if (apiKeyInput.value === '') {
    alert('Please enter an API key');
    return;
  }
  if (!client || storedApiKey !== apiKeyInput.value) {
    initClient(apiKeyInput.value);
    storedApiKey = apiKeyInput.value;
  }
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
});

async function fetchCustomers() {
  const customersCollection = await client.customers.getAll();
  console.log('%cCollection', 'font-size: 16px;font-weight:bold;color:red');
  console.log(customersCollection);
  for (const item of customersCollection) {
    console.log('%cItem', 'font-size: 16px;font-weight:bold;color:red');
    console.log({
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
    });
  }
  showOutput(customersCollection);
}

async function fetchApiKeys() {
  const apiKeysCollection = await client.apiKeys.getAll();
  console.log('%cCollection', 'font-size: 16px;font-weight:bold;color:red');
  console.log(apiKeysCollection);
  for (const item of apiKeysCollection) {
    console.log('%cItem', 'font-size: 16px;font-weight:bold;color:red');
    console.log({
      apiUser: item.apiUser,
      allowedIps: item.allowedIps,
      createdAt: item.createdTime,
      updatedAt: item.updatedTime,
      secretKey: item.secretKey,
    });
  }
  showOutput(apiKeysCollection);
}

async function fetchValueLists() {
  const valueListsCollection = await client.lists.getAll();
  console.log('%cCollection', 'font-size: 16px;font-weight:bold;color:red');
  console.log(valueListsCollection);
  for (const item of valueListsCollection) {
    console.log('%cItem', 'font-size: 16px;font-weight:bold;color:red');
    console.log({
      id: item.id,
      version: item.version,
      description: item.description,
      values: item.values,
      createdAt: item.createdTime,
      updatedAt: item.updatedTime,
    });
  }
  showOutput(valueListsCollection);
}

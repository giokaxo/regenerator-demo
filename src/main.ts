import './style.css';
import { initClient, showOutput, sleep, renderList, client } from './utils';

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
  renderEl.innerHTML = '';
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
    case 'products':
      fetchProducts();
      break;
  }
});

async function fetchProducts() {
  const productsCollection = await client.products.getAll();
  console.log('%cCollection', 'font-size: 16px;font-weight:bold;color:red');
  console.log(productsCollection);
  renderList(productsCollection, (item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    createdTime: item.createdTime,
    updatedTime: item.updatedTime,
  }));
  showOutput(productsCollection);
}

async function fetchCustomers() {
  const customersCollection = await client.customers.getAll();
  console.log('%cCollection', 'font-size: 16px;font-weight:bold;color:red');
  console.log(customersCollection);
  renderList(customersCollection, (item) => ({
    id: item.id,
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
  }));
  showOutput(customersCollection);
}

async function fetchApiKeys() {
  const apiKeysCollection = await client.apiKeys.getAll();
  console.log('%cCollection', 'font-size: 16px;font-weight:bold;color:red');
  console.log(apiKeysCollection);
  renderList(apiKeysCollection, (item) => ({
    apiUser: item.apiUser,
    allowedIps: item.allowedIps,
    createdTime: item.createdTime,
    updatedTime: item.updatedTime,
    secretKey: item.secretKey,
  }));
  showOutput(apiKeysCollection);
}

async function fetchValueLists() {
  const valueListsCollection = await client.lists.getAll();
  console.log('%cCollection', 'font-size: 16px;font-weight:bold;color:red');
  console.log(valueListsCollection);
  renderList(valueListsCollection, (item) => ({
    id: item.id,
    version: item.version,
    description: item.description,
    values: item.values,
    createdTime: item.createdTime,
    updatedTime: item.updatedTime,
  }));
  showOutput(valueListsCollection);
}

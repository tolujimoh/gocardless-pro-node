# gocardless-pro-node

A Node.js Client for interracting with the Gocardless Pro API

[![NPM version](https://img.shields.io/npm/v/gocardless-pro-node.svg)](https://www.npmjs.com/package/gocardless-pro-node)
[![Build Status](https://img.shields.io/travis/com/tolujimoh/gocardless-pro-node.svg)](https://travis-ci.org/tolujimoh/gocardless-pro-node)

## Documentation

See Gocardless Pro [API Reference](https://developer.gocardless.com/api-reference/2015-07-06)

## Installation

Install the package with

```
npm install gocardless-pro-node --save
```

or

```
yarn add gocardless-pro-node
```

## Usage

Create a `Client` instance and provide the access_token and environment you want to use.

```
const gocardlessPro = require('gocardless-pro-node');

// Gets Access Token stored in environment variable
const access_token = process.env.ACCESS_TOKEN;
const environment = 'sandbox';

const client = new gocardlessPro.Client({
  access_token,
  environment
});

const customers = await client.customers.list({
  params: {
    limit: 30
  }
});
```

### Usage with Typescript

```
import * as gocardlessPro from 'gocardless-pro-node';

// Gets Access Token stored in environment variable
const access_token = process.env.ACCESS_TOKEN;
const environment = 'sandbox';

const client = new gocardlessPro.Client({
  access_token,
  environment
});

client.customers.list({
  params: {
    limit: 30
  }
}).then((customers) => {
  // List of customers
}).catch((error) => {
  // Handle error
})
```

### Events

The Gocardless Client instance emits `request` and `response` events

```
const gocardlessPro = require('gocardless-pro-node');

// Gets Access Token stored in environment variable
const access_token = process.env.ACCESS_TOKEN;
const environment = 'sandbox';

const client = new gocardlessPro.Client({
  access_token,
  environment
});

// Add the request event handler function:
client.on('request', (request) => {
  // Carry out some actions
});

// Add the request event handler function:
client.on('response', (response) => {
  // Carry out some actions
});
```

## Avaliable resources

- Bank Details Lookups
- CreditorBankAccounts
- Creditors
- Customer Bank Accounts
- Customer Notifications
- Customers
- Events
- Mandate Import Entries
- Mandate Imports
- Mandate Pdfs
- Mandates
- Payments
- Payout Items
- Payouts
- Redirect Flows
- Refunds
- Subscriptions

# Development

Running tests

```
$ npm install
$ npm test
```

or

```
$ yarn
$ yarn test
```

To use your Sandbox Access Token to run the tests, you need to set the environment variable `SANDBOX_ACCESS_TOKEN`

```
$ export SANDBOX_ACCESS_TOKEN='Your Sandbox Access Token'
$ npm test
```

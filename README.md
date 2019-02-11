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
```

```
const customers = await client.customers.list({
  params: {
    limit: 30
  }
});
```

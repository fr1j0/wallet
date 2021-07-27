# Wallet

Wallet app with deposit, exchange, transactions and accounts management functionalities.
UI built on React + Redux + Redux Toolkit + Tailwind CSS.
Data is persisted in a JSON file and updated by a json-server.
Formatting and static code analysis are performed by Prettier and ESLint.
For the styling I chose Tailwind CSS.

- React
- Redux
- Redux Toolkit
- Typescript
- Tailwind css
- json-server
- Prettier
- ESLint

All exchange ratios are compared to EUR (ratio property in accounts at db.json file)

- 1 EUR - €1
- 1 EUR - $1.24
- 1 EUR - CHF1.09

## New currencies can be added as follows:

- Edit `db.json` file adding the new `currency`entry, ratio is the exchange value to EUR :

```javascript
  {
  "id": "AED",
  "ratio": 0.25,
  "symbol": "AED"
  }
```

- Add then an account for the new currency within `accounts`:

```javascript
  {
  "id": "AED",
  "balance": 0
  }
```

User actions:

## Dashboard:

- Shows total balance based on user's default currency
- Shows list of accounts and balance
- User can change default currency

## Deposit:

- User can deposit any of the accepted currencies. No limit in the amount to deposit, middle-east style ;)

## Exchange:

- Use can exchange any of the accepted currencies within its current balance.

## Transactions:

- Shows a list of wallet transactions.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Install all dependencies before running the app via `yarn`.

### `yarn start`

Runs the app and json-server in the development mode.\

### `yarn build`

Builds the app for production to the `build` folder.\

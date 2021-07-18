# Wallet

Wallet app with deposit, exchange, transactions and accounts management functionalities.
UI built on React + Redux + Redux Toolkit + Tailwind CSS.
Data is persisted in a JSON file updated by a json-server.

- React
- Redux
- Redux Toolbox
- Typescript
- Tailwind css
- json-server
- Prettier
- ESLint

All exchange ratios are compared to EUR (ratio property in accounts at db.json file)

1 EUR - €1
1 USD - €1.24
1 CHF - €1.09

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

In the project directory, you can run:

### `yarn start`

Runs the app and json-server in the development mode.\

### `yarn build`

Builds the app for production to the `build` folder.\

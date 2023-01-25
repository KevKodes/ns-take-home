## Coinbase crypto tracker

Add in this readme any comments or design decisions you think are relevant to the execution of your project.

Good luck!

## Description

The goal of this project is to create a small react application to track the prices of crypto currencies.

The app should show a simple text box to type the name of the currency we want to track, allow the user to select one and add it to a list where we can track the name, price and last updated time for it.

Filtering, searching and sorting the list are welcomed but not required for the app.

## Guidelines

- The code should be able to run locally.
- Use Coinbase public API to get the price data for currencies: https://developers.coinbase.com/api/v2#prices
- Code has to be well structured and have clear instructions on how to run and test it.
- Has to be implemented with React.
- You can use any framework of your choice to style the application.
- List of possible currencies to track can be predefined or taken from Coinbase API.

## How to run locally

- Pull from github
- `cd` into project directory
- Run `npm i`
- Run `npm start`
- Navigate in browser to `http://localhost:3000` and search for a coin

- Test with `npm test` from project directory

## Technologies used

- React v18.2.0
- Bootstrap v5.2.3
- React-Bootstrap v2.7.0
- testing-library/jest-dom v5.16.5
- testing-library/react v13.4.0
- testing-library/user-event v13.5.0

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

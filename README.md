# ts-preact-starter

[![Build status](https://img.shields.io/travis/nickytonline/ts-preact-starter.svg)](https://travis-ci.org/nickytonline/ts-preact-starter)
[![Netlify Status](https://api.netlify.com/api/v1/badges/05030e94-4c6a-4699-9c36-552a2e345f35/deploy-status)](https://app.netlify.com/sites/fervent-newton-a3b969/deploys)

<img src="https://flat.badgen.net/dependabot/nickytonline/ts-preact-starter?icon=dependabot" alt="Dependabot Badge" />

This is a barebones starter kit for Preact with TypeScript. Click the green "Use this template" button at the top of this page and enter a name and description for your repository.

To get up and running

1. `npm install`
1. From the command line run `npm start`
1. Navigate to [http://localhost:3000](http://localhost:3000)

To run tests:

1. `npm test`
1. To run in watch mode, run `npm run test:watch`
1. Tests are set up to run out of the `__tests__` folder. I put this by default as this appears to be part of the Jest defaults, but if you prefer to have your tests beside the code you want to test, simply modify the regex in the Jest configuration in `package.json`.

To run Cypress:

1. Run `npm run start` to start the webpack dev server.
2. Run `npm run e2e:dev` to open the Cypress test runner. For more information on Cypress, see their [official documentation](https://docs.cypress.io)

To run Storybook:

1. `npm run storybook`
1. Navigate to [http://localhost:6006](http://localhost:6006)
1. For more information on using Storybook, see the [Storybook for Preact](https://storybook.js.org/docs/guides/guide-preact) guide.

A deployed demo can be found at [typescript-preact-starter.iamdeveloper.com](https://typescript-preact-starter.iamdeveloper.com).

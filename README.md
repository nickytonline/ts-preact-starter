[![Build status](https://ci.appveyor.com/api/projects/status/bxe1t656us4dp5dd?svg=true)](https://ci.appveyor.com/project/nickytonline/ts-preact-starter)
[![Build status](https://img.shields.io/travis/nickytonline/ts-preact-starter.svg)](https://travis-ci.org/nickytonline/ts-preact-starter)

<img src="https://flat.badgen.net/dependabot/nickytonline/ts-preact-starter?icon=dependabot" alt="Dependabot Badge" />

ts-preact-starter
================

This is a barebones starter kit for Preact with TypeScript. Click the green "Use this template" button at the top of this page and enter a name and description for your repository.

To get up and running

1. `npm install` or `yarn` (assuming you have yarn installed globally)
1. From the command line run `npm start` or `yarn start`
1. Navigate to [http://localhost:3000](http://localhost:3000)

To run tests:
1. `npm test` or `yarn test`
1. To run in watch mode, run `npm run test:watch` or `yarn run test:watch`
1. Tests are set up to run out of the `__tests__` folder. I put this by default as this appears to be part of the Jest defaults, but if you prefer to have your tests beside the code you want to test, simply modify the regex in the Jest configuration in `package.json`.

To run the workbench:

1. `npm run workbench` or `yarn run workbench`
1. Navigate to [http://localhost:9001](http://localhost:9001)
1. For more information on using the workbench, see [React Storybook](https://github.com/storybooks/react-storybook)

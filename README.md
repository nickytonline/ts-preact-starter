[![Build status](https://ci.appveyor.com/api/projects/status/bxe1t656us4dp5dd?svg=true)](https://ci.appveyor.com/project/nickytonline/ts-preact-starter)
[![Build status](https://img.shields.io/travis/nickytonline/ts-preact-starter.svg)](https://travis-ci.org/nickytonline/ts-preact-starter)
[![Greenkeeper badge](https://badges.greenkeeper.io/nickytonline/ts-preact-starter.svg)](https://greenkeeper.io/)

ts-preact-starter
================

This is a barebones starter kit for Preact with TypeScript. The initial goal of this is just to be able to clone a repo and get going with Preact and TypeScript.
Here's the starter kit deployed at [typescript-preact-starter.iamdeveloper.com](https://typescript-preact-starter.iamdeveloper.com).

To get up and running:
* `npm install` or `yarn` (assuming you have yarn installed globally)
* From the command line run `npm start` or `yarn start`
* Navigate to [http://localhost:3000](http://localhost:3000)

To run tests:
* `npm test` or `yarn test`
* To run in watch mode, run `npm run test:watch` or `yarn run test:watch`
* Tests are set up to run out of the `__tests__` folder. I put this by default as this appears to be part of the Jest defaults, but if you prefer to have your tests beside the code you want to test, simply modify the regex in the Jest configuration in `package.json`.

To run the workbench:

* `npm run workbench` or `yarn run workbench`
* Navigate to [http://localhost:9001](http://localhost:9001)
* For more information on using the workbench, see [React Storybook](https://github.com/storybooks/react-storybook)

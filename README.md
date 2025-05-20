# Food ordering app [[URL](https://sparkly-gaufre-22707d.netlify.app)]

# staructure Planning
- Header
- - Logo
- - NavBar

- Body
- - Search
- - RestrauntContainer
- - - RestrauntCard

- Footer
- Copyright
- Link
- Contact


# ReduxToolkit
- Install @reduxjs/toolkit and react-redux
- Build our store [appStore.js]
- connect our store to our app [App.js]
- Slice (cart slice) [cartSlice.js]
- dispatch action
- read data using selector [header.js]

# Types of testing (developer)
- Unit Testing - testing one component in isolation
- Integration Testing - testing integartion of components
- End to End Testing (e2e testing) - complete flow, start for user lands on page and till he leaves.

# Setting up Testing
- Install React Testing Library
- Install Jest
- Install babel dependencies
- Configure babel [babel.config.js]
- Configure Parcel config file to disable default babel transpilation
- Jest configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make jsx work in text cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom
- Filename - any filen inside folder __test__, fileName.spec.js, fileName.test.js

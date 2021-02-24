# d.jin

`djin` is the personal website of its creator, d.jin. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
As of version 1.1.0, this website is front-end only. The production deployment of this website is available at https://djin.dev.

## Commands

Here are some scripts you can run:

### `yarn start`

Runs the personal website in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test:dev`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:ci`

Runs tests in a non-interactive mode. Used for building in CI/CD environments.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint:dev`

Runs `eslint` on all source files to correct formatting mistakes. Will fix errors/warnings if possible<br />

### `yarn lint:ci`

Runs `eslint` on all source files to correct formatting mistakes. Unlike its `dev` counterpart, errors will remain and fail builds. Used for building in CI/CD environments.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy:ci`
Runs all the necessary steps to create a production build in a deployment environment sequentially. First, 
dependencies are `install`ed, then the code is `lint`ed, `test`s are run, and the code is `built`.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

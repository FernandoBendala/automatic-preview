# Template React Webpack Redux CustomHooks
This is a template project for building a React application using Webpack, Redux, and custom hooks. It provides a structured starting point for creating scalable and maintainable React applications. The project follows modern development practices and includes features like testing, linting, and build optimization.


## Project Structure
The project structure is organized as follows:

- **.babelrc**: Configuration file for Babel, a JavaScript compiler, used to transpile modern JavaScript features into browser-compatible code.
- **.env**: Environment configuration file used to define backend URLs for different environments.
- **.eslintignore**: File specifying patterns to exclude from ESLint's linting process.
- **.eslintrc.json**: Configuration file for ESLint, a linter tool used for static code analysis.
- **.gitignore**: File specifying patterns of files and directories to be ignored by Git version control.
- **db.json**: Simulated JSON database file used by the server script to provide a mock backend during development.
- **jest.config.js**: Configuration file for Jest, a JavaScript testing framework.
- **package-lock.json**: Automatically generated file used for package version locking and dependency resolution.
- **package.json**: File containing project metadata, dependencies, and scripts.
- **README.md**: Instructions and information about the project (you're currently reading it!).
- **webpack.config.js**: Configuration file for Webpack, a module bundler used to bundle JavaScript, styles, and assets.

The source code of the project is located in the **src** directory, which further contains the following subdirectories:

- **hooks**: Directory for custom hooks used in the application.
- **reducer**: Directory for Redux reducers.
- **scss**: Directory for SCSS stylesheets.
- **services**: Directory for API services or other external service integrations.
- **tests**: Directory for unit tests.
- **app.js**: Main application component.
- **index.js**: Entry point for the application.
- **store.js**: Redux store configuration.
The **`public`** directory contains static assets, such as images, that will be served directly by the server.


## Technologies Used
The template utilizes the following technologies:

- **React**: A JavaScript library for building user interfaces. React is used in this project as the main framework for creating reusable components and efficiently managing the application state.
- **Webpack**: A module bundler for JavaScript applications. Webpack handles combining and optimizing different JavaScript files, styles, and assets of the project. It provides features like code splitting, lazy loading, and asset optimization to enhance the application's performance.
- **Redux**: A predictable state container for managing application state. Redux is used in this project to maintain a unidirectional data flow and facilitate centralized management of the application's global state, promoting better organization and scalability.
- **Custom Hooks**: Custom hooks allow for encapsulating reusable logic and behavior in React components. In this project, custom hooks are used to abstract common logic and facilitate its reuse across different components, promoting a modular and readable code structure.
- **Jest**: A JavaScript testing framework used for unit testing. Jest provides a set of tools for writing and executing tests in a simple and efficient manner. In this project, unit tests with Jest are used to ensure the proper functioning of implemented components and logic.
- **ESLint**: A linting tool for identifying and reporting patterns in JavaScript code. ESLint is used in this project to maintain consistent code style and avoid common errors. It helps catch issues in the code and improves the overall quality of the project.
- **json-server**: A library used to create a simulated RESTful API server using a JSON file as the data source. In this project, json-server is used to simulate a backend during development, allowing for testing and UI development without depending on a real server.
- **SCSS**: A CSS preprocessor that enhances CSS capabilities by adding variables, mixins, and other useful features. SCSS is used in this project to write CSS styles more efficiently and modularly. It provides additional features that facilitate organization and maintenance of styles.


## Usage
To run the project, you can use the following commands in the `package.json` file:

-   `build`: Compiles the project using Webpack in production mode.
-   `start`: Starts the Webpack development server.
-   `server`: Starts a simulated JSON server using `json-server`. It uses the `db.json` file as the database and runs on port 3001.
-   `test`: Runs the tests using Jest. It provides verbose output, runs tests in a single process (`--runInBand`), generates test coverage, and uses the configuration specified in `jest.config.js`.
-   `lint`: Performs static code analysis using ESLint. It checks for errors and violations of the defined style rules in the `.eslintrc.json` configuration file.
-   `lint:fix`: Attempts to automatically fix errors and violations of the style rules found by ESLint.
-   `stats`: Generates Webpack build statistics in production mode. It outputs the statistics in JSON format and uses the configuration specified in `webpack.config.js`.


## Connect with backend using .env
It is important to include an `.env` file with the correct values for the BACKEND_URL_PROD and BACKEND_URL_DEV variables. These variables are used in the Webpack configuration to determine the backend URL based on the environment.

```bash
BACKEND_URL_PROD='your_production_backend_url'
BACKEND_URL_DEV='your_development_backend_url'
```

Replace your_production_backend_url with the actual URL of your production backend and your_development_backend_url with the actual URL of your development backend.


# CalPal Backend

This is the report the backend of the CalPal application, handling all logic and database interaction.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```bash
Node.js
npm
```

`npm` is included with Node.js. To install Node.js, download the installer for your OS.

### Installing

1. Clone the repo.
2. Install NPM packages

```bash
npm install
```

3. Start the development server

```bash
npm start
```

or use the following for automatic reloads

```bash
npm run dev
```

This will start your server on 'localhost' at port 3000.

### Running tests

To run the automated tests, use:

```bash
npm test
```

For automated testing, we are using the jest framework.

### Folder Structure

This project follows a modular structure that separates concerns for better maintainability and scalability. Here's an overview of the core directories:

- controllers/: Contains controller files that handle client requests and responses.
- models/: Contains schema definitions for your database models.
- routes/: Defines the routes of your application and links them to controller functions.
- services/: Holds the business logic of your application, often used by the controllers.
- tests/: Contains all the test files for testing your application.
- server.js: The entry point of the application. Initializes the app and includes all the necessary setup.

### Branching and Versioning

#### Branching

Use “feat/xxxx-name” and “fix/xxxx-name” branch naming convention. Every fix and feature should be on a new branch and merged with main through a reviewed pull request.

#### Versioning

We will use Semantic Versioning for our versioning convention.

1. MAJOR version when you make incompatible API changes
2. MINOR version when you add functionality in a backward compatible manner
3. PATCH version when you make backward compatible bug fixes

   ```
   [Major].[Minor].[Patch]
   Ex.: 1.3.14 v.
   ```

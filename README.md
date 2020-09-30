# version-checker

## Installation

1. Clone the git repository to your machine
2. Using npm, install dependencies to your system by running the `npm install` command in the cloned respository's base directory.
3. Once installed, run the server with the `npm start` command.


## Use

1. The endpoint to access the server can be reached at [localhost:3000](http://localhost:3000) or [127.0.0.1:3000](http://127.0.0.1:3000) by default.
2. Appending `/compareVersions/versionOne/versionTwo` to the url will respond with a JSON object representing whether versionOne is `before`, `equal`, `after` versionTwo.

**Example:**
A request to `localhost:3000/compareVersions/1.0.2/1.0.1/` would return a JSON object with the following structure:

```JSON
{
  "result": "after",
}
```

## Testing

1. Tests can be run by running the `npm test` command in your terminal.

## Dependencies
* NodeJS
* Express
* Babel
* eslint (AirBNB Styling)
* Jest
* npm
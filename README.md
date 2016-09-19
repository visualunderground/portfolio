![Codeship](https://codeship.com/projects/ad3a94a0-5fcc-0134-b7ad-1efa85447d7f/status?branch=master)
# visualunderground/grid

This is the personal site of Tom Carrington.

## Documentation

### Requirements
_TBC_
### Installation
_TBC_

<!--
#### Scaffolding

- Get the vendor dependencies node
- Get the vendor dependencies bower
- Build the things (CSS, Images, JS)
 -->

### Testing
TBC
#### Performance testing & budgets
Automated performance testing using
[WebPagetest.org](https://www.webpagetest.org/).
##### Setup
_Coming soon!_
##### Running tests
_Coming soon!_
#### Accessibility testing
Automated Accessibility testing using [Tenon.io](http://tenon.io).

##### Setup
Get a unique API key by creating a free [Tenon.io](http://tenon.io) account and add it to a **config.json** file in the root of the application.

```js
{
  'tennon': '--YourSecretApiKeyHere--',
  'wpt':    '--YourSecretApiKeyHere--'
}
```
##### Running tests
Tests are run using the following command:
```shell
$ grunt test:accessibility
```
This task:
1. Generates static HTML files from the HBS source and saves them to **/tests/tenon/source/**
2. Copies asset files to **/tests/tenon/source/** (for inlining)
3. Tests the static files using Tenon's API

If the task fails it will exit Grunt and a failure report will be generated in **/tests/tenon/result/**.

##### Recommended use
Trigger the command using a Git pre-commit hook as Tenon limits API calls to 200 a month for free accounts.

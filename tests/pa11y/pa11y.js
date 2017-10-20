'use strict'

const pa11y = require('pa11y')
const path = require('path')
const html = require('pa11y-reporter-html')
const fs = require('fs')

pa11y('http://localhost:3000/', {
  includeWarnings: true,
  standard: 'WCAG2AA',
  screenCapture: path.join(__dirname, 'results/capture.png'),
  // Log what's happening to the console
  log: {
    debug: console.log,
    error: console.error,
    info: console.log
  }
}).then(results => {
  // Convert results to HTML
  html.results(results).then(markup => {
    fs.appendFile(path.join(__dirname, 'results/results.html'), markup, function (err) {
      if (err) {
        return console.log(err)
      }
    })
  })
})

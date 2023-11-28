const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQxNmQ0YWFhLWQzMjYtNDFhMi04MGVjLTE4ZmE0NzE1ZTRhMC0xNzAxMTE1MzU2MTQwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNWExZGQyMzYtYjIyMi00MGYwLWJhOGEtMDdmYzcwNWQ4MzczIiwidHlwZSI6InQifQ.hHU7fxbH2EdvRAe2MxySsLe1U7x_9BNDpMTEIGFtdIA'


cypress.run({
  browser: 'chrome'
})
.then((results) => {
  const args = {
    target: TOKEN
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})

# Week 3 Review - Mads Brandt

#### 10-02-2020 - Getting started with Travis and CI

- Link to assignment: [Getting Started with Travis and CI](https://docs.google.com/document/d/1yN8fiKHI5oz4TfZrH_zHla51eiQ42F8tognZ4vefcVw/edit)
- Location in repo: [01_Monday/travisGettingStarted](01_Monday/travisGettingStarted)

- Link to assignment: [REST, JPA, Test and CI with our start code](https://docs.google.com/document/d/1X3fK_9k2x4nImWI66EGrKbN0bOYXPRAepmGPEc-crHU/edit)
- Location in repo: [01_Monday/week03-Friday](01_Monday/week03-friday) - *also used as backend for the friday assignment as well as for the test-assignment tomorrow*

#### 11-02-2020 - Testing a Rest API
- Link to assignments: [Testing REST-endpoints](https://docs.google.com/document/d/1ukf16bSqAso0XBubaGv1InwBfl5o5987JwWZIiN7prM/edit)
- Location in repo: [01_Monday/week03-friday](01_Monday/week03-friday)

#### 12-02-2020 - JavaScript Introduction
- Link to assignments: [The JavaScript Array](https://docs.google.com/document/d/1eEJbwvOn19fy9MoasclKURqpk3rRVSHZ4S0hGsQUG3s/edit)
- Location in repo: [03_Wednesday/the-javascript-array/theJSArray.js](03_Wednesday/the-javascript-array/theJSArray.js)

- Link to assignment: [JavaScript Day-1](https://docs.google.com/document/d/1g4NPayMnNV8UUNdoTLZdcf4BehCip14QDuRwa4V7uFU/edit)
- Location in repo: [03_Wednesday/the-javascript-array/javascriptFunctions.js](03_Wednesday/the-javascript-array/javascriptFunctions.js)

#### 13-02-2020 - JavaScript and the Document Object Model (DOM)
- Link to assignments: [Dom Manipulation and Events](https://docs.google.com/document/d/1vctwfldnReoszybFU0jO7Jm7JQ4Ia-CJvEymaj-QClM/)
- Location in repo: [04_Thursday/DomManipulationAndEvents](04_Thursday/DomManipulationAndEvents)

- Link to assignments: [Getting Started with the fetch-API](https://docs.google.com/document/d/1eR7qJhV_fZH2VbqmyA6YWhzDCInvAHwpEeU-R3UvPAw/edit)
- Location in repo: [04_Thursday/Getting-started-with-fetch](04_Thursday/Getting-started-with-fetch)

#### 14-02-2020 - Friday assignment - Add a JavaScript-driven frontend to your REST-API

For the Javascript driven frontend I decided to implement a React application in order to test out hooks and stateless functional components for some personal projects.
The implementation of this, however, came with some challanges.

The backend with the rest API's is deployed to tomcat at [madsbrandt.codes](madsbrandt.codes)  with source code here: [01_Monday/week03-Friday](01_Monday/week03-friday). 
The React application is deployed to Heroku [here](https://cph-3sem-week3-friday.herokuapp.com/) and the source code can be found here: [05_Friday/rest-movie-ui](05_Friday/rest-movie-ui)
This gave some issues with CORS. 
I managed to resolve some of them, so movies is fetched from the tomcat server on mount, however some functionality, like voting and creating, is still limited due to CORS-issues. 

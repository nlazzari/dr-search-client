# find-a-gp-in-bc: react client
![landing](https://cloud.githubusercontent.com/assets/14853203/25364331/835db2a8-2916-11e7-8e92-43dff609e296.png)

## Intro
A React.js front-end for the [dr-search](https://github.com/nlazzari/dr-search) data service that helps you find the best family doctor in British Columbia. This client makes AJAX requests to the service's RESTful JSON API, and presents a list of family doctors accepting new patients in your city.



## Search Form
The search form provides options to filter results by the doctor's city, gender, and language spoken.

![search](https://cloud.githubusercontent.com/assets/14853203/25364279/13e40116-2916-11e7-9122-202524d61866.png)

## Results
Doctors with a star-rating on RateMDs will appear at the top of the results in descending order, with a direct link to their review page.

![card](https://cloud.githubusercontent.com/assets/14853203/25364145/1489fdec-2915-11e7-88d3-588870f04cea.png)  

## Dependencies

 - [create-react-app](https://github.com/facebookincubator/create-react-app) - React app starter with zero configuration.
 - [reactstrap](https://reactstrap.github.io/) - React component library based on Bootstrap 4
 - [react-router](https://github.com/ReactTraining/react-router) - React Router v3
 - [react-fontawesome](https://github.com/danawoodman/react-fontawesome) - Font Awesome component library for React
 - [medical icons](https://thenounproject.com/milindacourey10/collection/medical/) - set of free medical themed icons

## Installation
 Start the dr-search service first, then run the commands

```
$ yarn install
```
 or
 ```
$ npm install
```

to install all dependencies. When finished, run the commands

```
$ yarn start
```
 or
 ```
$ npm start
```

to run the client.

# Restaurant Finder

## Description
A simple Node.js + Express application that allows users to search for restaurants by postcode using the Just Eat API. The app dynamically fetches and displays restaurant data using Handlebars templates.


## MVP
- Search restaurants by postcode.
- Fetch live data from external API.
- Display top 10 restaurants.
- Show restaurant names, cuisines, rating ad address.
- Show restaurant logos as an extra.
- Server-side rendering with Handlebars.

## API routes
- GET / 
  - renders index.hbs

## Backlog
- Improve UI with CSS framework.
- Add loading and error states.
- Add validation for postcode input box.
- Make the UI responsive for mobile devices.

## Technologies Used
- Express.js
- Node.js
- Handlebars template
- Axios
- Nodemon

## Build & Run
1) Install Depedencies
    - npm install
    - npm i axios
    - npm i nodemon
    - npm i handlebars

2) Run the Application
    - nodemon app.js or node app.js

3) Open the Browser
    - http://localhost:3000

## Usage
1) Enter postcode in text bar.
2) Click search.
3) View 10 Restaurants with name, rating, logo, address & cuisine.

## Assumptions
- Postcodes are expected in a valid UK format.
- It is assumed that the API response structure remains consistent.

## Author
- Aditya Raikar
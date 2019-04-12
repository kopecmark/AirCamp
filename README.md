![Logo](https://s3-us-west-1.amazonaws.com/aircamp-pro/aircamplogo.png)

Live Site: [AirCamp](https://air-camp.herokuapp.com)

## Overview
AirCamp is a full-stack single-page web application inspired by [HipCamp](https://www.hipcamp.com/). The frontend utilizes React.js with Redux while the backend utilizes the Ruby on Rails framework with PostGresQL.

### Setup
To run this application locally:
1. Clone the repo
2. run ```npm install```
3. run ```npm run server```
4. run ```rails server```
5. Navigate to ```http://localhost:3000/``` on your browser

## Functionality
* User can create an account and login
* User can navigate listings and view their location on Google Maps
* A listing can be selected to view addistional details about the property
* Adjusted google map api to only display relevant controls to minimize distractions

## Technologies Used
### Backend
* Framework: Ruby on Rails (v5.2.1)
* Database: PostgreSQL (v11.0)
* External APIs: Google Maps API
* AWS S3: stores listing photos

### Frontend
* Framework: React/Redux (v16.6.3/4.0.1)
* Styling: SCSS
* User Authentication: Created using BCrypt (v3.1.7)

## Possible Future Implementations
* Ability for a user to view listing availability
* Ability for a user to book a listing
* Ability for a user to leave a review

# Hunter Sutton's Personal Website

## https://hunterwsutton.com

## Description

This website is meant to act as both a resume and a portfolio of my professional work.

## Implementation

The site is implemented using the Node.js framework combined with Express and Handlebars. The site is deployed to AWS using an Elastic Beanstalk environment.

## Running the App

### Production Mode

`npm start` starts the app with the port being set to 3000 or process.env.PORT if it is given.

### Development Mode

`npm run dev` starts the app using Nodemon, an npm package. Nodemon restarts the development server whenever a local change is detected. Saving the need to restart node. This will use port 3000 unless process.env.PORT is set.
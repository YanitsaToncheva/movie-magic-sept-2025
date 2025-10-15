# movie-magic-sept-2025
SoftUni JS Back End Course Project

SoftUni Back End Course Project

## Workshop 1 -Express and Templating

### Setup

- [x] Initialize NodeJS Project
- [x] Add Express server `npm i express`
- [x] Config debugging
- [x] Add workshop resources
- [x] Setup Handlebars `npm i express-handlebars`
- [x] Setup static files
- [x] Render Home page
- [x] Add Layout
- [x] Render about page

### Architecture and dynamic rendering
- [x] Add home controller
- [x] Add movie data layer
- [x] Add movie service
- [x] Render movies on home page
- [x] Show no movies screen
### Create Movie
- [x] Add movie Controller
- [x] Show create movie page
- [x] Add routes
- [x] Add 404 page
- [x] Read body data
- [x] Create movie
    - [x] Add action
    - [x] Add service
    - [x] Add model method for creating movie
- [x] Redirect after creation
- [x] Add unique id for each created movie   

### Details page
- [x] Add navigation button for detail page
- [x] Add route with param for detail page
- [x] GetOne movie from service
- [x] Find movie by id from model
- [x] Render details page with dynamic data


### Search
- [x] Show static search page
- [x] Render all movies
- [x] Modify search form
- [x] Filter movies
    - [x] By year
    - [x] By genre
    - [x] By title
- [x] Remember search words
### Bonuses
- [x] Dynamic page title
- [x] File persistence
- [x] Rating

## Workshop 2 - MongoDB Database

### Prerequisites
- [x] Install MongoDB Community Server
- [x] Install Compass GUI
- [x] Instal Mongosh CLI (Optional)

### Setup
- [x] Install mongoose `npm i mongoose`
- [x] Connext to DB

### Refactor Movies to use mongoose
- [x] Add movie model
    - [x] Create movie schema
    - [x] Create movie model
- [x] Import file movies to database
- [x] Fix own property handlebars problem with lean method
- [x] General fix for own property problem
- [x] Refactor details
- [x] Refactor create
- [x] Refactor search

### Add Cast
- [x] Add new resources
- [x] Create cast Controller
- [x] Create cast page
- [x] Add Cast model
- [x] Create cast service
- [x] Create cast functionality

### Attach cast to movie (relations)
- [x] Add attach cast button
- [] Add attach cast page
- [] Add dynamic data to cast page
- [] Add relation between cast and movie
- [] Attach cast functionality


### Shoe cast on details (population)

### Bonuses
- [] Env variables
- [] Name in movie
- [] Add movie views to a folder
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
- [x] Add attach cast page
- [x] Add dynamic data to cast page
- [x] Show cast list in attach select
- [x] Add relation between cast and movie
- [x] Attach cast functionality


### Show cast details (population)
- [x] Get movie casts filtered
- [x] Show casts on details
- [x] Get movie casts using population

### Bonuses
- [x] Filter casts if they are already attached
- [x] Add movie views to a folder
- [] Env variables
- [] Name in movie


## Workshop 3 - Session and Authentication

### Initial Setup
- [x] Add resources

### Registration
- [x] Add new controller `authController`
- [x] Add registration page
- [x] Add User model
- [x] Add User service
- [x] Handle registration(create user in database)
- [x] Add password hashing

### Login
- [x] Add login page
- [x] Handle login page
    - [x] Validate user
    - [x] Validate password
    - [x] Create token
    - [x] Return token to client

### Logout
- [x] Add logout action
- [x] Clear cookie

### Authorization
- [x] Install cookie parser
- [x] Add auth middleware
- [x] Add isAuth route guard
- [x] Add isGuest route guard 

### Dynamic navigation
- [x] Group navigation by user type (all, authenticated and guest)
- [x] Add auth info to handlebars context

### Show creator control buttons
- [x] Add edit and delete buttons on detail page
- [x] Add creator as relation to movies
- [x] Add user as creator on movie create
- [x] Show buttons only for creators

### Edit movies
- [x] Add edit page
- [x] Add dynamic movie data to edit page

### Delete movies
- [x] Add delete action
- [x] Add creator validation
- [x] Handle edit movie

### Bonus
- [x] Automatic login on register
- [x] Edit categories
- [] Invalidate token on logout
- [] Refresh token

## Workshop 4 - Validation and Error Handling

- [x] Add resources

### Validation
- [x] Validate movie
- [x] Validate cast
- [x] Validate user
- [x] Validate passwords in model

### Error Handling

- [x] Add static error notification container
- [x] User register error handling
- [x] Render error container conditionally
- [x] Retain register form data on error
- [x] Extract get error message
- [x] User login error handling

### Bonuses
- [] Dynamic year check
- [] Character name
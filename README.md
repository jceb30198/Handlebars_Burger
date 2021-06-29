# Handlebars Burger

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technology Used](#technology-used)
- [Goals](#goals)
- [Authors](#authors)

## Description
This web application allows for input of a new burger, that will then go into the "Hungry?" column and once the "Eat!" button is clicked the burger is then placed inside of the "Devoured!" column. The application uses express for the routing and express-handlebars which is a template engine for express that calls for the use of handlebars templating language. Handlebars is used to make the HTML layout of the application. SQL is used to insert, update, and get the data, then it goes through an object-relational mapping (ORM) tool made with node so that the data can be used for the layouts.

## Features
- Landing page before seeing the appplication.
![Landing Page](public/assets/images/landing.png)
- Main page of the application where the side-bar on the left shows if there were notes made previously.
![Notes Landing](public/assets/images/notes01.png)
- The user can type a subject along with a body and then save the note by clicking the floppy disk icon in the top right corner.
![Notes Input 01](public/assets/images/notes02.png)
- This is what the note shows up as once it is saved. A new note can be composed by clicking the pencil icon in the top right corner.
![Notes Display 01](public/assets/images/notes03.png)
- Two notes are saved in the image below and the second note that was saved is being displayed.
![Notes Display 02](public/assets/images/notes04.png)
- One of the notes was deleted by clicking on the red trash icon and now only the second note that was created is being displayed.
![Notes Display 03](public/assets/images/notes05.png)

## Technology Used
- HTML
- CSS
- Materialize
- Google Fonts
- JavaScript
- jQuery
- Node.js
- Express.js

## Goals
The main goal of this project was to learn more about the express-handlebars template engine along with object-relational mapping using JavaScript and SQL.

## Authors
- Jack Ceballos
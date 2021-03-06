# Nikko 
### [Live Preview](https://nikko-atkvicdenk.now.sh)


### Stack

* Awesome [AngularJS](http://www.angularjs.org/) on the client
* CSS based on [Twitter's bootstrap](http://getbootstrap.com/)
* Build on [Gulp](https://gulpjs.com/)
* Jquery
* App routing on UI Router
* Infinite Scrolling on ng-infinite scroll

### Release Notes

* Built with separation of concern
* Separate controller for search functionality
* Angularjs filter to remove duplicate results from search
* Angularjs directive for loading images into the view
* Angularjs service to load data using AJAX
* Angularjs cut filter to cut out the extra length in movie titles


### Build


This is a demo project with a build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community:
* powered by [Gulp.js](https://gulpjs.com/)
* build supporting JS, CSS minification
* [Twitter's bootstrap](http://getbootstrap.com/) 

## Installation

### Prerequisites

To get you started you need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)
* Install Gulp

    ```
    npm install -g gulp
    ```
Make sure you have gulp installed globally

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/djdennyjohn/nikko.git
```

### Install Dependencies

```
cd nikko
npm install
```

### Run the Application

The project is built with a simple development web server. The simplest way to start this server is:

```
npm start
```

### Build the App
The app is made up of a number of javascript, css and html files that need to be merged into a final distribution for running.  The app uses Gulp build tool to do this.
* Build client application:

    ```
    cd nikko
    gulp clean
    gulp
    ```
This will create a dist folder with all the required files.
    
### Running

    ```
    cd dist
    npm start
    ```
    
    
    

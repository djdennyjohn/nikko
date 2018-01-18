# Nikko 
### [Live Preview](https://dist-azumzmjukh.now.sh/#/home)


### Stack

* Awesome [AngularJS](http://www.angularjs.org/) on the client
* CSS based on [Twitter's bootstrap](http://getbootstrap.com/)
* Build on [Gulp](https://gulpjs.com/)


### Build


This is a demo project with a build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community:
* powered by [Gulp.js](https://gulpjs.com/)
* build supporting JS, CSS minification
* [Twitter's bootstrap](http://getbootstrap.com/) 

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)
* Install Gulp

    ```
    npm install -g gulp
    ```

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/djdennyjohn/nikko.git
cd nikko
npm install
npm start

```


### Build the client app
The app is made up of a number of javascript, css and html files that need to be merged into a final distribution for running.  We use the Gulp build tool to do this.
* Build client application:

    ```
    cd nikko
    grunt build
    
### Running

    ```
    cd dist
    npm start
    ```

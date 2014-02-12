kyleaclark.com
============

##Authored Date

February 2014

(last edit: February 2014)

##Overview

Single Page Application built on AngularJS.

##Setup

Install Node dependencies [compation version >= 0.10.0 < 0.11.0] - refer to nodejs.org.

Install Grunt depdencies [npm install -g grunt-cli] - refer to http://gruntjs.com/getting-started.

Install Bower dependencies [npm install -g bower, Git via http://git-scm.com] - refer to http://bower.io/.

##Build

Clone repo to local.

Use correct nvm version e.g.:

```
nvm use 0.10.17
```

Run npm install to install project dependencies from package.json:

```
npm install
```

Run "grunt build" to install project dependencies from bower.json.

```
grunt build
```

##Run

Run "grunt serve" command from root to run application locally

Run "grunt production" command from root to jshint, compile js and css into disbrution-ready, minified code, and run application locally



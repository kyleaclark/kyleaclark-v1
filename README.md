kyleaclark.com
============

##Overview

Single Page Application built on AngularJS.

##Setup

Install Node dependencies [compatible version >= 0.10.0 < 0.11.0] - refer to nodejs.org.

Install Grunt depdencies [npm install -g grunt-cli] - refer to http://gruntjs.com/getting-started.

Install Bower dependencies [npm install -g bower, Git via http://git-scm.com] - refer to http://bower.io/.

##Build

Clone repo to local.

Use correct nvm version >= 0.10.0 < 0.11.0 e.g.:

```
nvm use 0.10.17
```

Run "npm install" to install project dependencies from package.json:

```
npm install
```

Run "bower install" to install bower dependencies from bower.json.

```
bower install
```

##Run

Run "grunt serve" command from root to run application locally

Run "grunt serve:dist" command from root to compile js, css, & html into disbrution-ready, minified code

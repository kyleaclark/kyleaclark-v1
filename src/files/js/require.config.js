var require = {
  
  paths: {
    bower: "lib/bower/",
    jquery: "lib/bower/jquery/jquery",
    underscore: "lib/bower/underscore/underscore",
    angular: "lib/bower/angular/angular"
  },
  
  shim: {
    underscore: {
      exports: "_"
    }
  },
  
  baseUrl: "/"
};

// Disable cache
require.urlArgs = "time=" + new Date().getTime();


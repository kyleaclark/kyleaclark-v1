/*** GISTS SERVICE ***/

angular.module("PortfolioApp").service("GistsService", function () {

  this.getGists = function () {
    return this.gists;
  };
  
  this.gists = [

    /* This Scope */
    {
      id: 3,
      title: "This Scope",
      slide: "gistsThisScope",
      blurb: "Toying with the scope of this",
      references: [
        { url: "https://gist.github.com/kyleaclark/9181673", name: "Gist" }
      ],
      created: new Date(2014, 1),
      updated: new Date(2014, 1),
      descriptions: [
        { content: "A JavaScript play on the this keyword" },
        { content: "showcases scope, hoisting, and object instances" }
      ],
      technologies: [
        { name: "JavaScript" }
      ]
    },

    /* JS Observer Pattern */
    {
      id: 2,
      title: "JS Observer Pattern",
      slide: "gistsJsObserverPattern",
      blurb: "Observer Pattern w/ PubSub & EventHub utilities",
      references: [
        { url: "https://gist.github.com/kyleaclark/9175749", name: "Gist" }
      ],
      created: new Date(2014, 1),
      updated: new Date(2014, 1),
      descriptions: [
        { content: "Implements an example of how to use the Observer Pattern w/ PubSub & EventHub utilities in JavaScript." }
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "RequireJS" },
        { name: "jQuery" }
      ]
    },

    /* Ajax Call Util */
    {
      id: 1,
      title: "Ajax Call Util",
      slide: "projectsCallsUtil",
      blurb: "Ajax call utility",
      references: [
        { url: "https://gist.github.com/kyleaclark/8553379", name: "Gist" }
      ],
      created: new Date(2014, 0),
      updated: new Date(2014, 0),
      descriptions: [
        { content: "Utilize utility object methods for Ajax get/post calls and deferred when/then/fail. Keep your code clean and DRY." }
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "RequireJS" },
        { name: "jQuery" },
        { name: "Ajax"}
      ]
    }

  ];

});
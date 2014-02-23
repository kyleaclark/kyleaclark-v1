/*** GISTS SERVICE ***/

angular.module("PortfolioApp").service("GistsService", function () {

  this.getGists = function () {
    return this.gists;
  };
  
  this.gists = [

    /* JS Observer Pattern */
    {
      id: 1,
      title: "js observer pattern",
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
      title: "ajax call util",
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
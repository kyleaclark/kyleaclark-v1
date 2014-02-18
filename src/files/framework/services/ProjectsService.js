app.service("ProjectsService", function () {

  this.getProjects = function () {
    return projects;
  };

  this.getProject = function (id) {
    var projectsLength = projects.length;

    for (var i = 0; i < projectsLength; i++) {
      if (projects[i].id === id) {
        return projects[i];
      }
    }
    return null;
  };

  var projects = [

    /* kyleaclark.com */
    {
      id: 18,
      title: "CallsUtil.js",
      slide: "projectsCallsUtil",
      blurb: "Gist for a JavaScript Ajax call utility",
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
        { name: "jQuery" }
      ]
    },

    /* kyleaclark.com */
    {
      id: 17,
      title: "kyleaclark.com",
      slide: "projectsKyleAClark",
      references: [
        { url: "http://kyleaclark.com", name: "Website" },
        { url: "https://github.com/kyleaclark/kyleaclark", name: "GitHub" }
      ],
      created: new Date(2013, 7),
      updated: new Date(2014, 1),
      descriptions: [
        { content: "Personal Project" },
        { content: "Originally built in ASP.NET MVC framework; ported to run as a single page application using AngularJS."}
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "AngularJS" },
        { name: "Docpad" },
        { name: "Grunt" },
        { name: "Bower" },
        { name: "RequireJS" },
        { name: "CoffeeScript" },
        { name: "Eco" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Sass" },
        { name: "Responsive Design"}
      ]
    },

    /* Mic Mac Moe JS */
    {
      id: 17,
      title: "Mic Mac Moe Js",
      slide: "projectsMicMacMoeJs",
      references: [
        { url: "http://micmacmoejs.com", name: "Website" },
        { url: "http://micmacmoejs.com", name: "GitHub" }
      ],
      created: new Date(2013, 7),
      updated: new Date(2014, 1),
      descriptions: [
        { content: "Personal Project" },
        { content: "Web application of a cross between tic-tic-toe and connect four." },
        { content: "Completely refactored a new build and expanded functionality of the original mic-mac-moe. "}
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "NodeJS" },
        { name: "Docpad" },
        { name: "Grunt" },
        { name: "Bower" },
        { name: "RequireJS" },
        { name: "CoffeeScript" },
        { name: "Eco" },
        { name: "jQuery" },
        { name: "UnderscoreJS" },
        { name: "JSON" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Sass" },
        { name: "Responsive Design"}
      ]
    },

    /* 88 Depot */
    {
      id: 16,
      title: "88 Depot",
      slide: "projects88Depot",
      references: [
        { url: "http://88depot.com", name: "Website" }
      ],
      created: new Date(2013, 6),
      updated: new Date(2014, 0),
      descriptions: [
        { content: "3rd Party Project" },
        { content: "Contributor to web design and front-end web development" }
      ],
      technologies: [
        { name: "ASP.NET MVC" },
        { name: "JavaScript" },
        { name: "jQuery" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Sass" },
        { name: "Responsive Design" }
      ]
    },

    /* CMS Live Editing Prototype */
    {
      id: 15,
      title: "CMS Live Editing",
      slide: "projectsCmsPrototype",
      references: [
        { url: "https://github.com/kyleaclark/cms-live-prototype", name: "GitHub" }
      ],
      created: new Date(2013, 11),
      updated: new Date(2014, 0),
      descriptions: [
        { content: "Personal Project" },
        { content: "Prototype application to utilize HTML5 contenteditable in a live CMS editor." }
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "NodeJS" },
        { name: "ExpressJS" },
        { name: "MongoDB" },
        { name: "Mongoose" },
        { name: "Grunt" },
        { name: "Bower" },
        { name: "RequireJS" },
        { name: "jQuery" },
        { name: "Handlebars" },
        { name: "HTML5" },
        { name: "CSS" }
      ]
    },

    /* Express on Handlebars Template */
    {
      id: 14,
      title: "Express on Handlebars",
      slide: "projectsExpressTemplate",
      references: [
        { url: "https://github.com/kyleaclark/express-on-handlebars-template", name: "GitHub" }
      ],
      created: new Date(2013, 10),
      updated: new Date(2013, 11),
      descriptions: [
        { content: "Personal Project" },
        { content: "The application is a project template set up for a Node ExpressJS app using the Handlebars templating engine. Structured to accommodate MVC." }
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "NodeJS" },
        { name: "ExpressJS" },
        { name: "Grunt" },
        { name: "Bower" },
        { name: "RequireJS" },
        { name: "Handlebars" }
      ]
    },

    /* Mic Mac Moe< */
    {
      id: 13,
      title: "Mic Mac Moe",
      slide: "projectsMicMacMoe",
      references: [
        { url: "https://github.com/kyleaclark/mic-mac-moe", name: "GitHub" }
      ],
      created: new Date(2013, 5),
      updated: new Date(2013, 6),
      descriptions: [
        { content: "Web application of a cross between connect four and tic-tic-toe." },
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "jQuery" },
        { name: "UnderscoreJS" },
        { name: "JSON" },
        { name: "HTML5" },
        { name: "CSS3" }
      ]
    },

    /* Ruckus Design Studios */
    {
      id: 12,
      title: "Ruckus Design Studios",
      slide: "projectsRuckusDesignStudios",
      references: [
        { url: "http://ruckusdesignstudios.com", name: "Website" }
      ],
      created: new Date(2013, 1),
      updated: new Date(2013, 2),
      descriptions: [
        { content: "3rd Party Project" },
        { content: "Conntracted to implement user interface from 3rd party design comps and assets. "}
      ],
      technologies: [
        { name: "HTML5" },
        { name: "CSS3" }
      ]
    },

    /* Puppy Carousel */
    {
      id: 11,
      title: "Puppy Carousel",
      slide: "projectsPuppyCarousel",
      references: [
        { url: "https://github.com/kyleaclark/puppy-carousel", name: "GitHub" }
      ],
      created: new Date(2012, 11),
      updated: new Date(2012, 11),
      descriptions: [
        { content: "Personal Project" },
        { content: "360 degree image carousel" }
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "jQuery" },
        { name: "HTML5" },
        { name: "CSS" },
        { name: "Flickr API" }
      ]
    },

    /* Railroad Project */
    {
      id: 10,
      title: "Railroad Project",
      slide: "projectsRailroad",
      references: [
        { url: "https://github.com/kyleaclark/railroad-project", name: "GitHub" }
      ],
      created: new Date(2011, 3),
      updated: new Date(2011, 3),
      descriptions: [
        { content: "Object-Oriented Programming & Data Structures Class Project" }
      ],
      technologies: [
        { name: "Java" }
      ]
    },

    /* Banking Account */
    {
      id: 9,
      title: "Banking Account",
      slide: "projectsBankingAccount",
      references: [
        { url: "https://github.com/kyleaclark/banking-account", name: "GitHub" }
      ],
      created: new Date(2011, 2),
      updated: new Date(2011, 2),
      descriptions: [
        { content: "Object-Oriented Programming & Data Structures Class Project" }
      ],
      technologies: [
        { name: "Java" }
      ]
    },

    /* Blackjack */
    {
      id: 8,
      title: "Blackjack",
      slide: "projectsBlackjack",
      references: [
        { url: "https://github.com/kyleaclark/blackjack", name: "GitHub" }
      ],
      created: new Date(2010, 1),
      updated: new Date(2010, 1),
      descriptions: [
        { content: "Personal project" },
        { content: "Object-Oriented Programming & Data Structures Class Project" }
      ],
      technologies: [
        { name: "Java" }
      ]
    },

    /* Connect Four */
    {
      id: 7,
      title: "Connect Four",
      slide: "projectsConnectFour",
      references: [
        { url: "https://github.com/kyleaclark/connect-four", name: "GitHub" }
      ],
      created: new Date(2005, 4),
      updated: new Date(2006, 3),
      descriptions: [
        { content: "Personal Project" },
        { content: "Desktop GUI application to play a game of Connect Four." }
      ],
      technologies: [
        { name: "C++" },
        { name: "Allegro Gaming Library" }
      ]
    },

    /* Time Calculator 2 */
    {
      id: 6,
      title: "Time Calculator 2",
      slide: "projectsTimeCalculator2",
      references: [
        { url: "https://github.com/kyleaclark/time-calculator-2", name: "GitHub" }
      ],
      created: new Date(2005, 4),
      updated: new Date(2005, 4),
      descriptions: [
        { content: "Personal Project" },
        { content: "Desktop GUI application to calculate time" }
      ],
      technologies: [
        { name: "Java" },
        { name: "Swing" }
      ]
    },

    /* Time Calculator */
    {
      id: 5,
      title: "Time Calculator 1",
      slide: "projectsTimeCalculator1",
      references: [
        { url: "https://github.com/kyleaclark/time-calculator-1", name: "GitHub" }
      ],
      created: new Date(2004, 7),
      updated: new Date(2004, 1),
      descriptions: [
        { content: "Personal Project" },
        { content: "Desktop console application to calculate time." }
      ],
      technologies: [
        { name: "C++" }
      ]
    },

    /* Light */
    {
      id: 4,
      title: "Light",
      slide: "projectsLight",
      references: [
        { url: "https://github.com/kyleaclark/light", name: "GitHub" }
      ],
      created: new Date(2003, 7),
      updated: new Date(2003, 1),
      descriptions: [
        { content: "Personal Project" },
        { content: "Desktop GUI application to play a maze puzzle game." }
      ],
      technologies: [
        { name: "C++" },
        { name: "Allegro" }
      ]
    },

    /* Spaced Out */
    {
      id: 3,
      title: "Spaced Out",
      slide: "projectsSpacedOut",
      references: [
        { url: "https://github.com/kyleaclark/spaced-out", name: "GitHub" }
      ],
      created: new Date(2002, 6),
      updated: new Date(2003, 7),
      descriptions: [
        { content: "Personal Project" },
        { content: "Desktop GUI application to play a space shooter game with AI." }
      ],
      technologies: [
        { name: "C++" },
        { name: "Allegro" }
      ]
    },

    /* Dynamic Toe */
    {
      id: 2,
      title: "Dynamic Toe",
      slide: "projectsDynamicToe",
      references: [
        { url: "https://github.com/kyleaclark/dynamic-toe", name: "GitHub" }
      ],
      created: new Date(2002, 3),
      updated: new Date(2002, 4),
      descriptions: [
        { content: "Personal Project" },
        { content: "Desktop console application to play a game of tic-tac-toe with a dynamic game board size." }
      ],
      technologies: [
        { name: "C++" }
      ]
    },

    /* 88 Depot */
    {
      id: 1,
      title: "Escape to Safety",
      slide: "projectsEscapeToSafety",
      references: [
        { url: "https://github.com/kyleaclark/escape-to-safety", name: "GitHub" }
      ],
      created: new Date(2002, 2),
      updated: new Date(2002, 3),
      descriptions: [
        { content: "Personal Project" },
        { content: "Desktop console application to play a maze puzzle game." }
      ],
      technologies: [
        { name: "C++" }
      ]
    }
  ];

});
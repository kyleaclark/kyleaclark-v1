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

      /* Mic Mac Moe JS */
      {
        id: 17, 
        title: "Mic Mac Moe Js",
        references: [
          { url: "http://micmacmoejs.com", name: "Website" },
          { url: "http://micmacmoejs.com", name: "GitHub" }
        ],
        created: new Date(2013, 7),
        updated: new Date(2014, 1),
        descriptions: [
          { content: "Personal Project" }
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
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design"}
        ]
      },

      /* 88 Depot */
      {
        id: 16,
        title: "88 Depot",
        references: [
          { url: "http://88depot.com", name: "Website" }
        ],
        created: new Date(2013, 7),
        updated: new Date(2014, 1),
        descriptions: [
          { content: "3rd party project" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* CMS Live Prototype */
      {
        id: 15,
        title: "CMS Live Prototype",
        references: [
          { url: "https://github.com/kyleaclark/cms-live-prototype", name: "GitHub" }
        ],
        created: new Date(2013, 11),
        updated: new Date(2014, 0),
        descriptions: [
          { content: "Prototype application to utilize HTML5 contenteditable in a live CMS editor" }
        ],
        technologies: [
          { name: "JavaScript" }
        ]
      },

      /* Express on Handlebars Template */
      {
        id: 14,
        title: "Express on Handlebars Template",
        references: [
          { url: "https://github.com/kyleaclark/express-on-handlebars-template", name: "GitHub" }
        ],
        created: new Date(2013, 10),
        updated: new Date(2013, 11),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "JavaScript" }
        ]
      },

      /* Mic Mac Moe< */
      {
        id: 13,
        title: "Mic Mac Moe<",
        references: [
          { url: "https://github.com/kyleaclark/mic-mac-moe", name: "GitHub" }
        ],
        created: new Date(2013, 7),
        updated: new Date(2014, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Ruckus Design Studios */
      {
        id: 12,
        title: "Ruckus Design Studios",
        references: [
          { url: "http://ruckusdesignstudios.com", name: "Website" }
        ],
        created: new Date(2013, 7),
        updated: new Date(2014, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Puppy Carousel */
      {
        id: 11,
        title: "Puppy Carousel",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2013, 7),
        updated: new Date(2014, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Railroad Project */
      {
        id: 10,
        title: "Railroad Project",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2013, 7),
        updated: new Date(2014, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Banking Account */
      {
        id: 9,
        title: "Banking Account",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2013, 7),
        updated: new Date(2014, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Blackjack */
      {
        id: 8,
        title: "Blackjack",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2010, 7),
        updated: new Date(2010, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Connect Four */
      {
        id: 7,
        title: "Connect Four",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2005, 7),
        updated: new Date(2005, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Time Calculator 2 */
      {
        id: 6,
        title: "Time Calculator 2",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2005, 7),
        updated: new Date(2005, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Time Calculator */
      {
        id: 5,
        title: "Time Calculator",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2004, 7),
        updated: new Date(2004, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Light */
      {
        id: 4,
        title: "Light",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2003, 7),
        updated: new Date(2003, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Spaced Out */
      {
        id: 3,
        title: "Spaced Out",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2003, 7),
        updated: new Date(2003, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* Dynamic Toe */
      {
        id: 2,
        title: "Dynamic Toe",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2002, 7),
        updated: new Date(2002, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      },

      /* 88 Depot */
      {
        id: 1,
        title: "Escape to Safety<",
        references: [
          { url: "http://88depot.com", name: "GitHub" }
        ],
        created: new Date(2002, 7),
        updated: new Date(2002, 1),
        descriptions: [
          { content: "Created: 09/2013 &mdash; Last Edit: 02/2014" }
        ],
        technologies: [
          { name: "ASP.NET MVC" },
          { name: "JavaScript" },
          { name: "jQuery" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Responsive Design" }
        ]
      }
  ];

});
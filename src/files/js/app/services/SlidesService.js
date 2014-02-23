

angular.module("PortfolioApp").service("SlidesService", function () {

  this.getHomeSlides = function () {
    return this.homeSlides;
  };
  
  this.homeSlides = [

    /* home/about */
    {
      id: 6,
      title: "about",
      dataSlide: "homeAbout",
      containerClass: "about",
      contentClass: "about-content",
      partial: "js/app/partials/home/about.html"
    },

    /* home/background */
    {
      id: 5,
      title: "background",
      dataSlide: "homeBackground",
      containerClass: "background",
      contentClass: "background-content",
      partial: "js/app/partials/home/background.html"
    },

    /* home/experience */
    {
      id: 4,
      title: "experience",
      dataSlide: "homeExperience",
      containerClass: "experience",
      contentClass: "experience-content",
      partial: "js/app/partials/home/experience.html"
    },

    /* home/skills */
    {
      id: 3,
      title: "skills",
      dataSlide: "homeSkills",
      containerClass: "skills",
      contentClass: "skills-content",
      partial: "js/app/partials/home/skills.html"
    },

    /* home/education */
    {
      id: 2,
      title: "education",
      dataSlide: "homeEducation",
      containerClass: "education",
      contentClass: "education-content",
      partial: "js/app/partials/home/education.html"
    },

    /* home/contact */
    {
      id: 1,
      title: "contact",
      dataSlide: "homeContact",
      containerClass: "contact",
      contentClass: "contact-content",
      partial: "js/app/partials/home/contact.html"
    }

  ];

});
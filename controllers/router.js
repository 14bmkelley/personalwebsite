module.exports = function(router) {
  
  router.get("/", function(request, response) {
    response.render("template", {
      "title": "Home"
    });
  });
  
  router.get("/about_me", function(request, response) {
    response.render("template", {
      "title": "About Me"
    });
  });
  
  router.get("/portfolio", function(request, response) {
    response.render("template", {
      "title": "My Portfolio"
    });
  });
  
  router.get("/contact_me", function(request, response) {
    response.render("template", {
      "title": "Contact Me"
    });
  });
  
  return router;
  
};

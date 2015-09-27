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
    parseQuery(request.url, function(query) {
      var submitted = (query["success"]) ? true : false;
      response.render("template", {
        "title": "Contact Me",
        "success": submitted
      });
    });
  });
  
  return router;
  
};

var parseQuery = function(url, callback) {
  var query = {};
  var keyStart = false;
  var key = "";
  var valStart = false;
  var val = "";
  for (var i = 0; i < url.length; i++) {
    if (url[i] === "?" || url[i] === "&") {
      keyStart = true;
      valStart = false;
      if (key !== "" && val !== "") {
        query[key] = val;
        key = "";
        val = "";
      }
    } else if (url[i] === "=") {
      keyStart = false;
      valStart = true;
    } else if (i === url.length - 1 && url[i] !== "/") {
      val += url[i];
      query[key] = val;
    } else {
      if (keyStart) key += url[i];
      if (valStart) val += url[i];
    }
  }
  callback(query);
}

(function loadSocialIcons() {
  
  var socialIcons = [
    {
      "id": "fbicon",
      "url": "http://facebook.com/3r4nd0n",
      "image": "/res/images/facebook-logo.png"
    },
    {
      "id": "twittericon",
      "url": "http://twitter.com/14bmkelley",
      "image": "/res/images/twitter-logo.png"
    },
    {
      "id": "instagramicon",
      "url": "http://instagram.com/14bmkelley",
      "image": "/res/images/instagram-logo.png"
    },
    {
      "id": "linkedinicon",
      "url": "http://linkedin.com/in/14bmkelley",
      "image": "/res/images/linkedin-logo.png"
    }
  ];
  
  for (var i = 0; i < socialIcons.length; i++) {
    var icon = React.createElement(SocialIcon, {
      "url": socialIcons[i]["url"],
      "image": socialIcons[i]["image"]
    });
    var smid = socialIcons[i]["id"] + "sm";
    var lgid = socialIcons[i]["id"] + "lg";
    React.render(icon, document.getElementById(smid));
    React.render(icon, document.getElementById(lgid));
  }
  
})();

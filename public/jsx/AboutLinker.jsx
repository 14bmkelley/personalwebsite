(function loadAboutSections() {
  
  var sections = [
    {
      "id": "code",
      "image": "/res/images/code.jpg",
      "blurb": "Coding is a passion of mine. It is one of those things I constantly talk about. I started in high school by writing my own static website and that was all it took to get me hooked. Now, I am the webmaster of my fraternity, I work as a software developer for an on campus project and I have various other personal projects that I work on, like this very site! I am a huge fan of EdTech and I love to help others learn programming."
    },
    {
      "id": "frat",
      "image": "/res/images/fraternity.jpg",
      "blurb": "I am a brother of the Sigma Phi Delta engineering fraternity. I have made a bond with this group of men that I know will stick with me forever. We put on professional, as well as social events and seek to help the presence of engineering in society. I, myself, attribute a lot of my success at Cal Poly to my brotherly peers. They challenge my opinions and help me to grow as an individual. When I was adjusting to starting college, they were there to anchor me down."
    },
    {
      "id": "calpoly",
      "image": "/res/images/calpoly.jpg",
      "blurb": "Currently, I am pursuing a bachelor's degree in Computer Engineering at San Luis Obispo, California. I applied early decision in November of 2014 and was accepted January of the following year. The weather here is amazing and the experience has been like no other. I thrive in the competitive nature and strive to be the best that I can be."
    },
    {
      "id": "faith",
      "image": "/res/images/faith.jpg",
      "blurb": "Early on in high school, I came to know God. Since then, my faith has shaped me to have the morals I do today. I love going to church and fellowshipping with others. In high school, I was actually part of the worship team at our church and if you couldn't find me on stage playing keyboard or guitar, I was in the back running the soundboard. This is where I find strength when my life gets hard."
    }
  ];
  
  for (var i = 0; i < sections.length; i++) {
    var section = React.createElement(AboutSection, {
      "image": sections[i]["image"],
      "blurb": sections[i]["blurb"]
    });
    React.render(section, document.getElementById(sections[i]["id"]));
  }
  
})();

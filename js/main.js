//Smooth scroll navigation 
$(document).ready(function(){
  $(".main-nav a").on('click', function(event) {

  event.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){

    window.location.hash = hash;
    });
  });
}) //End smooth scroll navigation

//Hides the word "Developer" on the nav bar... 
//...when the page is scrolled down
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.title').fadeOut();
     }
    else
     {
      $('.title').fadeIn();
     }
 }); //End hide function
 
 //Slide in Animation
$(window).scroll(function() {
  $(".slide-animation").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
}); //End Slide in Animation

 //Populates the project's section 
 function print(content) {
     var projects = document.getElementById('projects');
     projects.innerHTML = content;
 }
 
 var html = '<h1 class="slide-animation">Projects</h1>';
 html += '<ul class="projects">';
 
 for (var i = 0; i < projects.length; i++) {
     html += '<li class="slide-animation"><a href="' + projects[i].img + '"><img src="' + projects[i].img + '" alt="" height="200" width="335"></a>';
     html += '<div class="overlay"><h3>' + projects[i].name + '</h3><p>' + projects[i].desc + '</p><a href="' + projects[i].url + '" target="_blank"';
     html += 'class="button">View Demo</a></div></li>';
 }
 
 html += "</ul>";
 
 print(html); //End project populate function
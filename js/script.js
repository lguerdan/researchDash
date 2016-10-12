$(document).ready(function(){
   $(".dropdown-button").dropdown();
   $(".button-collapse").sideNav();

   $("#toggleSideNav").click(function(){
      $('.button-collapse').sideNav('show');

   });


});



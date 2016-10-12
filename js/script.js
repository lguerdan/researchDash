$(document).ready(function(){
   $(".dropdown-button").dropdown();
   $(".button-collapse").sideNav();

   $("#toggleSideNav").click(function(){
      $('.button-collapse').sideNav('show');

   });

   $("#table tr").click(function() {
      var selected = $(this);
      window.location.href='user.html';
   });

});



$("#myModal").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open")
});

$( ".open-section li" ).click(function() {
  $(".open-section li").removeClass( "active" );
  $(this).toggleClass( "active" );
});



$( "#fotos" ).click(function() {
  $("#fotos-show").addClass( "show" );
  $("#equipos-show").addClass( "hide" ).removeClass("show");
  $("#reservar-show").addClass( "hide" ).removeClass("show");
});
$( "#equipos" ).click(function() {
  $("#equipos-show").addClass( "show" );
  $("#fotos-show").addClass( "hide" ).removeClass("show");
  $("#reservar-show").addClass( "hide" ).removeClass("show");
});
$( "#reservar" ).click(function() {
  $("#reservar-show").addClass( "show" );
  $("#equipos-show").addClass( "hide" ).removeClass("show");
  $("#fotos-show").addClass( "hide" ).removeClass("show");
});


$( "#fotosB" ).click(function() {
  $("#fotos-showB").addClass( "show" );
  $("#equipos-showB").addClass( "hide" ).removeClass("show");
  $("#reservar-showB").addClass( "hide" ).removeClass("show");
});
$( "#equiposB" ).click(function() {
  $("#equipos-showB").addClass( "show" );
  $("#fotos-showB").addClass( "hide" ).removeClass("show");
  $("#reservar-showB").addClass( "hide" ).removeClass("show");
});
$( "#reservarB" ).click(function() {
  $("#reservar-showB").addClass( "show" );
  $("#equipos-showB").addClass( "hide" ).removeClass("show");
  $("#fotos-showB").addClass( "hide" ).removeClass("show");
});

$( "#equiposAB" ).click(function() {
  $("#equipos-showAB").addClass( "show" );
  $("#reservar-showAB").addClass( "hide" ).removeClass("show");
});
$( "#reservarAB" ).click(function() {
  $("#reservar-showAB").addClass( "show" );
  $("#equipos-showAB").addClass( "hide" ).removeClass("show");
});


$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});
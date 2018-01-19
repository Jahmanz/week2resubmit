$(document).ready(function() {
  $("form#formOne").submit(function(event) {
      event.preventDefault();
    var frontbackInput = $("#frontback").val();
    var bigsmallInput = $("#bigsmall").val();
    var softwareInput = $("#software").val();
    var newoldInput= $("#newold").val();
    var broadInput = $("#broad").val();

    if ((frontbackInput === 'frontend') && (bigsmallInput === "small") && (softwareInput === "enduser") && (newoldInput === "old") && (broadInput === "yes")) {
      $("#clickable").click();
      $(".answerCSS").show("#css");
      $("#formOne").hide();

    //   } if ((frontbackInput === "backend") && (bigsmallInput === "big") && (softwareInput === "business") && (newoldInput === "old") && (broadInput === "yes")) {
    //   $("#clickable").click();
    //   $(".answerCsharp").show("#csharp");
    //   $(".answerJava").show("#java");
    //   $("#formOne").hide();
    //
    //   } if ((frontbackInput === "backend") && (bigsmallInput === "small") && (softwareInput === "enduser") && (newoldInput === "new") && (broadInput === "yes")) {
    //   $("#clickable").click();
    //   $(".answerRuby").show("#ruby");
    //   $("#formOne").hide();
    //
    // } if ((frontbackInput === "frontend") && (bigsmallInput === "small") && (softwareInput === "enduser") && (newoldInput === "new") && (broadInput === "yes")) {
    //   $("#clickable").click();
    //   $(".answerRuby").show("#ruby");
    //   $(".answerCSS").show("#css");
    //   $("#formOne").hide();
    //
    // } if ((frontbackInput === "backend") && (bigsmallInput === "big") && (softwareInput === "business") && (newoldInput === "old") && (broadInput === "yes")) {
    //   $("#clickable").click();
    //   $(".answerCsharp").show("#csharp");
    //   $(".answerPhp").show("#php");
    //   $("#formOne").hide();

   // } else {
   //  $("#clickable").click();
   //  $(".answerJava").show("#java");
   //  $(".answerPhp").show("#php");
   //  $(".answerCsharp").show("#csharp");
   //  $(".answerRuby").show("#ruby");
   //  $("#formOne").hide();
  }
  });
});

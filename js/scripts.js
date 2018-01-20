$(document).ready(function() {
  $("form#formOne").submit(function(event) {
      event.preventDefault();
    var frontbackInput = $("#frontback").val();
    var bigsmallInput = $("#bigsmall").val();
    var softwareInput = $("#software").val();
    var newoldInput= $("#newold").val();
    var broadInput = $("#broad").val();

    if ((frontbackInput === "frontend") && (bigsmallInup = "small") && (softwareInput = "business") && (newoldInput = "old") && (broadInput = "yes"))
  {
      $("#clickable").click();
      $(".answerCSS").show("#css");
      $("#formOne").hide();

   } if ((frontbackInput === "backend") && (bigsmallInup = "big") && (softwareInput = "business") && (newoldInput = "old") && (broadInput = "no"))
      {
        $("#clickable").click();
        $(".answerCsharp").show("#csharp");
        $("#formOne").hide();

   } else {
    $("#clickable").click();
    $(".answerJava").show("#java");
    $(".answerPhp").show("#php");
    $(".answerCsharp").show("#csharp");
    $(".answerRuby").show("#ruby");
    $("#formOne").hide();
     alert('Good news, you qualify for all of these courses! Take a look and see which course you want to take.');
  }
  });
});

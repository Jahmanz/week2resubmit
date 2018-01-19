$(document).ready(function() {
  $("#formOne").submit(function() {
    var frontbackInput = $("inputfrontback").val();
    var bigsmallInput = $("input#bigsmall").val();
    var softwareInput = $("input#software").val();
    var newoldInput= $("input#newold").val();
    var broadInput = $("input#broad").val();

    if (frontbackInput === 'frontend' && bigsmallInput === "small" && softwareInput === "enduser" && newoldInput === "old" && broadInput === "yes")

    $("#csharp").text();
    $("#languages").show()

    event.preventDefault();
  });
});

// $(document).ready(function() {
//   $("form#insurance").submit(function(event) {
//     var age = parseInt($("input#age").val());
//     var gender = $("select#gender").val();
//
//     if (age) {
//       var quote = (100 - age) * 3;
//       if (gender === 'male' && age < 26) {
//         quote += 50;
//       }
//
//       $("#rate").empty().append(quote);
//       $("#quote").show();
//     } else {
//       alert('Please enter your age.');
//     }
//
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var countToInput = parseInt($("#countTo").val());
    var countByInput = parseInt($("#countBy").val());
    var output = [];
    if (countToInput > 0 && countByInput > 0) {
      for  (var index = countByInput; index <= countToInput; index += countByInput) {

      output.push(index);
      };
    } else {
      alert("Please enter a number greater than zero in both fields");
    };
      console.log(output);
      $(".output").text(output);
    event.preventDefault();
  });


})

var side1;
var side2;
var side3;

var whatKindOfTriangle = function() {
  if (side1 === side2 && side1 === side3) {
    return "equilateral";
  }
  else if (side1 === side2 || side1 === side3 || side2 === side3){
    return "isosceles";
  }
  else {
    return "scalene";
  }
}
var isItATriangle = function() {
  if ( (side1 + side2) <= side3 ) {
      return "not a triangle";
  }
  else if ( (side2 + side3) <= side1 ) {
    return "not a triangle";
  }
  else if ( (side1 + side3) <= side2 ) {
    return "not a triangle";
  }
  else {
    return whatKindOfTriangle();
  }
}
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var result;

    side1 = parseInt($("#side1").val());
    side2 = parseInt($("#side2").val());
    side3 = parseInt($("#side3").val());

    result = isItATriangle();

    $("#type").text(result);
    $(".output").show();
  });
});

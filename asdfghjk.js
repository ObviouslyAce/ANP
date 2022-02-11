//Attempt to get the element using document.getElementById
var element = document.getElementById("p");

//If it isn't "undefined" and it isn't "null", then it exists.
if(typeof(element) != 'undefined' && element != null){
  alert('Element exists!');
} else{
  alert('Element does not exist!');
}

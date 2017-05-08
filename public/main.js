$(document).ready(function(){
  console.log("js connected");
  var modalBody = document.getElementById("modalBody")

  $('#addPlayer').click(function(){
    console.log(modalBody);
    modalBody.style.display = "flex"
  })


})

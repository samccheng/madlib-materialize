$(document).ready(function() {
  $('.slider').slider();

  $('.materialboxed').materialbox();

  $('.modal').modal();

});

function addWords() {
  let input = document.getElementsByClassName("validate")
  let fill = document.getElementsByClassName("fill")

  for (let i = 0; i < fill.length; i++) {
    fill[i].innerText = input[i].value
    input[i].value = ""
  }
}

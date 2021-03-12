const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  //mimicServerCall("bogusUrl")
   mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


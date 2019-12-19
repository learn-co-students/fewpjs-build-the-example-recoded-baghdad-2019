// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let articalHearts = document.querySelectorAll('.like')

function likeCallback(e) {
  let heart = e.target
  if (e.target.innerText === "♡"){
    mimicServerCall('randomUrl').then(function(serverMessage){
      heart.innerHTML="♥"
      heart.style.color= 'red'
    })
  }
  else {
    mimicServerCall('randomUrl').then(function(serverMessage){
      heart.innerHTML="♡"
      heart.style.color= ''
    })
  }
}

for (let glyph of articalHearts){
  glyph.addEventListener("click", likeCallback)
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const articleHearts = document.querySelectorAll(".like");
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function (response) {
      alert("You notified the server!");
      alert(response);
    })
    .catch(function (error) {
      alert("Something went wrong!");
    });
}
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}
function mimicServerCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

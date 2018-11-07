let chatStateOpen = false;

function toggleChat() {
  console.log(chatStateOpen);

  if (!chatStateOpen) {
    console.log('yup');
    let chatButton = document.getElementsByClassName('chat');
    chatButton[0].classList.add('chatting');

    let innerFrame = document.getElementsByClassName('frame');
    innerFrame[0].classList.add('open');

    chatStateOpen = true;
  }
  else {
    let chatButton = document.getElementsByClassName('chat');
    chatButton[0].classList.remove('chatting');

    let innerFrame = document.getElementsByClassName('frame');
    innerFrame[0].classList.remove('open');

    chatStateOpen = false;
  }
}



let textInput = document.getElementById('stanzaInput');

// Init a timeout variable to be used below
var timeout = null;
document.read
let errorUrl = '/llama/index.html';
let blankUrl = errorUrl;
let inputURL;
// let iframeSrc = document.getElementsByTagName('iframe')[0].src;
let formMessage = document.getElementsByClassName('formMessage')[0];
let stanzaInput = document.getElementById('stanzaInput');
let closeButton = document.getElementsByClassName('closeButton')[0];

// Listen for keystroke events
textInput.onkeyup = function (e) {

    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 500ms
    timeout = setTimeout(function () {

      let inputURL = document.getElementById('stanzaInput').value;

      if (inputURL.includes('stanza')) {
        document.getElementsByTagName('iframe')[0].src = inputURL;
        stanzaInput.classList.remove('error');
        formMessage.classList.remove('error');
        closeButton.classList.remove('error');
      }
      else if (inputURL == '') {
        document.getElementsByTagName('iframe')[0].src = blankUrl;
        stanzaInput.classList.remove('error');
        formMessage.classList.remove('error');
        closeButton.classList.add('error');
      } else {
        document.getElementsByTagName('iframe')[0].src = errorUrl;
        stanzaInput.classList.add('error');
        formMessage.classList.add('error');
        closeButton.classList.add('error');
      }
    }, 500);
};


// function setFrame() {
//   setTimeout(function() {
//     let iframeURL = document.getElementById('stanzaInput').value;
//     let errorUrl = '/lama.html';
//     console.log(iframeURL);
//     console.log(iframeURL.includes('stanza'));
//     if (iframeURL.includes('stanza')) {
//       document.getElementsByTagName('iframe')[0].src = iframeURL;
//       document.getElementsByClassName('formMessage')[0].classList.remove('error');
//       document.getElementById('stanzaInput').classList.remove('error');
//       document.getElementsByClassName('closeButton')[0].classList.remove('error');
//     }
//     else if (iframeURL == '') {
//       document.getElementsByClassName('formMessage')[0].classList.remove('error');
//       document.getElementById('stanzaInput').classList.remove('error');
//       document.getElementsByTagName('iframe')[0].src = errorUrl;
//       document.getElementsByClassName('closeButton')[0].classList.add('error');
//     } else {
//       document.getElementsByClassName('formMessage')[0].classList.add('error');
//       document.getElementById('stanzaInput').classList.add('error');
//       document.getElementsByTagName('iframe')[0].src = errorUrl;
//       document.getElementsByClassName('closeButton')[0].classList.add('error');
//     }
//   }, 500);
// }

// "https://cdn.dribbble.com/users/1691845/screenshots/3929480/random_50fps.gif"

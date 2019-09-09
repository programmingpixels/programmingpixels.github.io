const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  
  sleep(5000).then(() => {
    check_commento_loaded();
    check_mailerlite_loaded();
  });


function check_commento_loaded() {
    var commentoLoginArea = document.getElementById('commento-login');
    var commentoMainArea = document.getElementById('commento-textarea-root');
    
    if (!commentoLoginArea && !commentoMainArea) {
        var commentoFailed = document.getElementById('commento-failed');
        commentoFailed.classList.remove("hidden");
    }
}

function check_mailerlite_loaded() {
  var mailerliteMainAreas = document.getElementsByClassName('ml-form-formContent');
  if (mailerliteMainAreas.length < 1) {
      var mailerliteFailed = document.getElementById('mailerlite-failed');
      mailerliteFailed.classList.remove("hidden");
  }
}
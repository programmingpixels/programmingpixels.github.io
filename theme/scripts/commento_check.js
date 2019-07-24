const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  
  sleep(5000).then(() => {
    check_commento_loaded();
  });


function check_commento_loaded() {
    var commentoMainArea = document.getElementById('commento-login');
    if (!commentoMainArea) {
        var commentoFailed = document.getElementById('commento-failed');
        commentoFailed.classList.remove("hidden");
    }
}

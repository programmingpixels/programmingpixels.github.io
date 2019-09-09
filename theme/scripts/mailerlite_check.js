// NOT IN USE

const sleep2 = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  
  sleep2(3000).then(() => {
    check_mailerlite_loaded();
  });


function check_mailerlite_loaded() {
    var mailerliteMainAreas = document.getElementsByClassName('ml-form-formContent');
    if (mailerliteMainAreas.length < 1) {
        var mailerliteFailed = document.getElementById('mailerlite-failed');
        mailerliteFailed.classList.remove("hidden");
    }
}

// NOT IN USE

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyHveGRlWIcg2ewyX4KeXlqzBnGKdR_55rzuo1bPHKkIE5Q9THG5LppOZ7YiUxH8Lxs/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""

        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
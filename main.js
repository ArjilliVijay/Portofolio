function typeStrings(strings, speed, delay) {
  const displayElement = document.getElementById('display');
  let currentString = 0;
  let index = 0;

  function type() {
    if (index < strings[currentString].length) {
      displayElement.innerHTML += strings[currentString].charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        index = 0;
        currentString = (currentString + 1) % strings.length; // Loop infinitely
        displayElement.innerHTML = ''; // Clear the previous string
        type();
      }, delay);
    }
  }

  type();
}

typeStrings(["Web Developer !","Programmer","Designer", "MCA Student at ACET", "AI Enthusiast !","Enthusiast Learner !"], 100, 1000);

function openWebsite() {
  window.open("https://drive.google.com/file/d/1hcVa-TIxu_jGw88eZ99Um6OgSbjySkvy/view", "_blank"); // Replace with your website URL
}

function scrollToSection() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

function scrollToSection1() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}


document.getElementById("goToSection2").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("about").scrollIntoView({
    behavior: "smooth" 
  });
});


document.getElementById("goToSection1").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("home").scrollIntoView({
    behavior: "smooth" 
  });
});
document.getElementById("goToSection3").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("skills").scrollIntoView({
    behavior: "smooth" 
  });
});

document.getElementById("goToSection4").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("projects").scrollIntoView({
    behavior: "smooth" 
  });
});

document.getElementById("goToSection5").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("contact").scrollIntoView({
    behavior: "smooth" 
  });
});

function openWebsite1() {
  window.open("https://github.com/ArjilliVijay/Recepie-Book.git", "_blank"); 
}
function openWebsite2() {
  window.open("https://github.com/ArjilliVijay/HTML-DEVELOPER-ASSIGNMENT.git", "_blank"); 
}
function openWebsite3() {
  window.open("https://github.com/ArjilliVijay/Game.git", "_blank"); 
}
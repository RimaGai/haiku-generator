function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: ["Created with care"],
    autoStart: true,
    delay: 100
    ,
  });
}

let haikuFormElement = document.querySelector("#haiku-form");
haikuFormElement.addEventListener("submit", generateHaiku);

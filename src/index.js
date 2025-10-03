function showHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    delay: 80,
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let loadingElement = document.querySelector("#loading");
  let haikuElement = document.querySelector("#haiku");

  haikuElement.textContent = "";
  loadingElement.classList.add("show");

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f3474034becbfaec1efe101oeef3cft3";
  let prompt = `Generate a haiku based on ${instructionsInput.value}`;
  let context = "You are a haiku expert. Only display the haiku itself.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then((response) => {
    loadingElement.classList.remove("show");
    showHaiku(response);
  });
}

let haikuFormElement = document.querySelector("#haiku-form");
haikuFormElement.addEventListener("submit", generateHaiku);

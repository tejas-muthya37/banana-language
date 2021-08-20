// DOM Scripting

// onClick is not a good practice

// document.querySelector and addEventListeners are APIs, to talk to a program.

// Promise - Hey, I will get this data from the server, but I am not sure when the server will respond. Once I get the data, what do you want to do? (then)

document.querySelector("#btn-translate").addEventListener("click", function () {
  var url =
    "https://api.funtranslations.com/translate/minion.json" +
    "?text=" +
    document.querySelector("#input-text").value;
  fetch(url)
    .then((response) => response.json())
    .then(
      (json) =>
        (document.querySelector("#output-text").innerText =
          json.contents.translated)
    )
    .catch((error) => console.log("Error!", error));
});

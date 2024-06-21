let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let quoteContainer = document.querySelector(".card");
let loader = document.querySelector(".loader");
function show(data) {
  console.log(data.content);
  console.log(data.author);
  console.log(data.length);
  if (data.length < 180) {
    quote.innerHTML = `${data.content} `;
    author.innerHTML = `<h3>- ${data.author}</h3>`;
    quoteContainer.classList.remove("hidden"); 
    loader.classList.add("hidden");
  } else {
    api();
  }
}
function api() {
  fetch("https://api.quotable.io/random?tags=technology")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      show(data);
    })
    .catch((error) =>
      console.error("Error fetching quote from Quotable:", error)
    );
}


loader.classList.remove("hidden"); 
quoteContainer.classList.add("hidden"); 

window.addEventListener("load", api());

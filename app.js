const quoteElement = document.querySelector(".quote");
const randomButton = document.querySelector(".iconContainer");

axios
  .get("https://api.kanye.rest/")
  .then(function (response) {
    // handle success
    const quote = response.data.quote;
    quoteElement.innerHTML = `<div class="quote">"${quote}"</div>`;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

randomButton.addEventListener("click", () => {
  window.location.reload();
});

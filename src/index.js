const init = () => {
    const inputForm = document.querySelector("form");
    const titleElement = document.querySelector("#movieDetails h4");
    const summaryElement = document.querySelector("#movieDetails p");

    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.getElementById("searchByID").value;

      fetch(`http://localhost:3000/movies/${input}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {

          titleElement.innerText = data.title;
          summaryElement.innerText = data.summary;
        })
        .catch((error) => {

          titleElement.innerText = "Movie not found";
          summaryElement.innerText = "";
        });
    });
  };

  document.addEventListener("DOMContentLoaded", init);
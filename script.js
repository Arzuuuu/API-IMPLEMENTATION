let searchbtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchbtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  console.log(finalURL);

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="data-wrapper">
            <h4>Common Languages: </h4>
            <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(", ")}</span>
        </div>
      `;
    })

    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3> The input field cannot be empty </h3>`;
      } else {
        result.innerHTML = `<h3> Please enter valid country name. </h3>`;
      }
    });
});

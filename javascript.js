document.addEventListener("DOMContentLoaded", function () {

  const countries = [
    {
      code: "AE",
      name: "UAE",
      flag: "./assets/Layout1/Image/flags/AE@2x.png"
    },

    {
      code: "CN",
      name: "China",
      flag: "./assets/Layout1/Image/flags/CN@2x.png"
    },

    {
      code: "DE",
      name: "Germany",
      flag: "./assets/Layout1/Image/flags/DE@2x.png"
    },

    {
      code: "DK",
      name: "Denmark",
      flag: "./assets/Layout1/Image/flags/DK@2x.png"
    },

    {
      code: "FR",
      name: "France",
      flag: "./assets/Layout1/Image/flags/FR@2x.png"
    },

    {
      code: "GB",
      name: "UK",
      flag: "./assets/Layout1/Image/flags/GB@2x.png"
    },

    {
      code: "IT",
      name: "Italy",
      flag: "./assets/Layout1/Image/flags/IT@2x.png"
    },

    {
      code: "RU",
      name: "Russia",
      flag: "./assets/Layout1/Image/flags/RU@2x.png"
    },

    {
      code: "US",
      name: "USA",
      flag: "./assets/Layout1/Image/flags/US@2x.png"
    }
  ];


  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  const selectedFlag =
    document.getElementById("selectedFlag");

  const selectedCountry =
    document.getElementById("selectedCountry");

  const selectedCountryCode =
    document.getElementById("selectedCountryCode");


  // CREATE OPTIONS
  countries.forEach(country => {

    const option = document.createElement("div");

    option.classList.add("flag-option");

    option.innerHTML = `
      <img src="${country.flag}" alt="${country.name}">
      <span>${country.name}</span>
    `;

    // CLICK EVENT
    option.addEventListener("click", () => {

      selectedFlag.src = country.flag;

      selectedCountry.textContent = country.name;

      selectedCountryCode.value = country.code;

      dropdownMenu.classList.remove("show");

    });

    dropdownMenu.appendChild(option);

  });


  // OPEN/CLOSE MENU
  dropdownBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    dropdownMenu.classList.toggle("show");

  });


  // CLOSE IF CLICK OUTSIDE
  document.addEventListener("click", () => {

    dropdownMenu.classList.remove("show");

  });

});
// SELECT CATEGORY FUNCTIONALITY

const items = document.querySelectorAll(".categories ul li");

items.forEach(item => {

    item.addEventListener("click", () => {

        // remove active class from all
        items.forEach(li => {
            li.classList.remove("active");
        });

        // add active class to clicked item
        item.classList.add("active");

    });

});


document.addEventListener("DOMContentLoaded", () => {

    const minSlider = document.getElementById("minSlider");
    const maxSlider = document.getElementById("maxSlider");

    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");

    function updateSlider() {

        let minVal = parseInt(minSlider.value);
        let maxVal = parseInt(maxSlider.value);

        if (minVal >= maxVal) {
            minSlider.value = maxVal - 100;
            minVal = maxVal - 100;
        }

        minPrice.value = "$" + minVal;
        maxPrice.value = "$" + maxVal;
    }

    minSlider.addEventListener("input", updateSlider);
    maxSlider.addEventListener("input", updateSlider);

    updateSlider();
});


document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".filter-header").forEach(header => {
        header.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });

});
// Dropdown toggle
document.querySelectorAll(".filter-header").forEach(header => {
header.addEventListener("click", () => {
header.parentElement.classList.toggle("active");
});
});

// Slider
const minSlider = document.getElementById("minSlider");
const maxSlider = document.getElementById("maxSlider");

const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

function updateSlider() {

let minVal = parseInt(minSlider.value);
let maxVal = parseInt(maxSlider.value);

if (minVal >= maxVal) {
minSlider.value = maxVal - 100;
minVal = maxVal - 100;
}

minPrice.value = "$" + minVal;
maxPrice.value = "$" + maxVal;
}

minSlider.addEventListener("input", updateSlider);
maxSlider.addEventListener("input", updateSlider);

updateSlider();

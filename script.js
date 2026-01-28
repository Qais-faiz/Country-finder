
const results = document.getElementById("result");
const input = document.getElementById("countryInput");
const searchBtn = document.getElementById("searchBtn");
const errorMessage = document.getElementById("errorMsg");

const countryFinder = async function(countryName) {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!res.ok) throw new Error('Country Not found')

      const data = await res.json();
      const country = data.find(c => c.name.common.toLowerCase() === countryName.toLowerCase());
      console.log(country)
    //   const country = data[0];

    const html = `
   
        <div class="primaryDetails">
            <h1 id="countryName">${country.name.common}</h1>
            <h3 id="region">${country.region}</h3>
            <img src="${country.flags.svg}" alt="Country Flag" id="flag">
        </div>

        <div class="secondaryDetail">
            <p id="capital">🔄 Capital: ${country.capital}</p>
            <p id="population">👬 Population: ${(country.population/1000000).toFixed(1)}M</p>
            <p id="area">🌏 Area: ${country.area.toLocaleString()} km<sup>2</sup></p>
            <p id="currency">💰 Currency: ${Object.values(country.currencies)[0].symbol}</p>
        </div>
    `

    results.insertAdjacentHTML('beforeend', html);}
    catch (err) {
        errorMessage.textContent = `Something went wrong, ${err.message}`
        errorMessage.classList.remove("hidden")
    }

}

searchBtn.addEventListener("click", function() {
    errorMessage.classList.add("hidden")
    const countryName = input.value.trim();
    results.innerHTML = ""
    countryFinder(countryName)
    input.value = ""

    })



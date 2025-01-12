function updateTime() {
  // Mauritius
  let mauritiusElement = document.querySelector("#mauritius");
  if (mauritiusElement) {
    let mauritiusDateElement = mauritiusElement.querySelector(".date");
    let mauritiusTimeElement = mauritiusElement.querySelector(".time");
    let mauritiusTime = moment().tz("Port Louis/Mauritius");

    mauritiusDateElement.innerHTML = mauritiusTime.format("MMMM	Do YYYY");
    mauritiusTimeElement.innerHTML = mauritiusTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  
// Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment().tz("Africa/Johannesburg");

    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  
  // Thailand
  let thailandElement = document.querySelector("#thailand");
  if (seoulElement) {
    let thailandDateElement = thailandElement.querySelector(".date");
    let thailandTimeElement = thailandElement.querySelector(".time");
    let thailandTime = moment().tz("Bangkok/Thailand");

    thailandDateElement.innerHTML = thailandTime.format("MMMM	Do YYYY");
    thailandTimeElement.innerHTML = thailandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", upd

function updateTime() {
   let losAngelesElement = document.querySelector("#los");
   if (losAngelesElement) {
     let losAngelesDate = losAngelesElement.querySelector(".date");
     let losAngelesTime = losAngelesElement.querySelector(".time");
     let losAngelesAA = moment().tz("America/Los_Angeles");
 
     losAngelesDate.innerHTML = losAngelesAA.format("MMMM Do YYYY");
     losAngelesTime.innerHTML = `${losAngelesAA.format(
       "h:mm:ss"
     )} <small>${losAngelesAA.format("A")}</small>`;
   }
 
   //Paris
   let parisElement = document.querySelector("#paris");
   if (parisElement) {
     let parisDateElement = parisElement.querySelector(".date");
     let parisTimeElement = parisElement.querySelector(".time");
     let parisTime = moment().tz("Europe/Paris");
 
     parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
     parisTimeElement.innerHTML = parisTime.format(
       "h:mm:ss [<small>]A[</small>]"
     );
   }
 
   // set time for Sydney
   let sydneyElement = document.querySelector("#syd");
   if (sydneyElement) {
     let sydneyDate = sydneyElement.querySelector(".date");
     let sydneyTime = sydneyElement.querySelector(".time");
     let sydneyAA = moment().tz("Australia/Sydney");
 
     sydneyDate.innerHTML = sydneyAA.format("MMMM Do YYYY");
     sydneyTime.innerHTML = sydneyAA.format("h:mm:ss [<small>]A[</small>]");
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
       <div class="date">${cityTime.format("MMMM    Do YYYY")}</div>
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
 citiesSelectElement.addEventListener("change", updateCity);

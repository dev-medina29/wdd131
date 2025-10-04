const date= new Date();
const hours= date.getHours();
const minutes= date.getMinutes();
const seconds= date.getSeconds();
const year= date.getFullYear();
const month= date.getMonth()+1;
const day= date.getDate();
current_year= document.querySelector("#currentyear");
current_year.innerHTML= `${year}`;
current_date= document.querySelector("#lastModified");
current_date.innerHTML= `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;
current_date.style.color= "black";
current_date.style.fontSize= "1em";
// Static values matching the displayed weather
const temperature = 9; // Celsius
const windSpeed = 14;   // km/h

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1);
    } else {
        return "N/A";
    }
}

const windChill = calculateWindChill(temperature, windSpeed);


const weatherList = document.querySelector("#weather ul");
if (weatherList) {
  
    let windChillItem = Array.from(weatherList.children).find(
        li => li.textContent.includes("Wind Chill")
    );
    if (windChillItem) {
        windChillItem.innerHTML = `<strong>Wind Chill:</strong> ${windChill} °C`;
    } else {
    
        const li = document.createElement("li");
        li.innerHTML = `<strong>Wind Chill:</strong> ${windChill} °C`;
        weatherList.appendChild(li);
    }
}

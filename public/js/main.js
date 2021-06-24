const cityName = document.getElementById('cityName');


const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const tempRealVal = document.getElementById('tempRealVal')
const tempStatus = document.getElementById('tempStatus');
const dataHide = document.querySelector('.middleLayer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = `Please Enter City Name Before Search`;
        dataHide.classList.add('dataHide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2af6dfe4a892629d70c1d9b9dd40082d`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            tempRealVal.innerText = arrData[0].main.temp;
            // tempStatus.innerText = arrData[0].weather[0].main;

           
            const tempMode =arrData[0].weather[0].main;
            // condition to Check Sunny Or Cloudy
            if(tempMode =="clear"){
                tempStatus.innerHTML =
                "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if(tempMode =="clouds"){
                tempStatus.innerHTML =
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if(tempMode =="Rain"){
                tempStatus.innerHTML =
                "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else if(tempMode == "Haze"){
                tempStatus.innerHTML =
                "<i class='fas fa-cloud-sun' style='color:#eccc68;'></i>"
            }
            else{
                tempStatus.innerHTML =
                "<i class='fas fa-cloud-sun' style='color:#eccc68;'></i>"
            }

            dataHide.classList.remove('dataHide');
        }catch{
            city_name.innerText = `Please Enter the City Name Properly`;
            dataHide.classList.add('dataHide');
        }
      
    }
}

submitBtn.addEventListener('click', getInfo);

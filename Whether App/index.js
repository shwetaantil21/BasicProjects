const key = 'f97d1a14c00230beed3ac9a58ea8a134';
function weatherAPI(){
    let city =document.forms['myForm'].search.value;


const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f97d1a14c00230beed3ac9a58ea8a134`;
fetch(url).then((response)=>{
    response.json().then((data)=>{
        console.log(data);
        let temp = data.main.temp -273.15;

        document.getElementById("city").innerHTML =data.name;
        document.getElementById("temp").innerHTML= temp.toFixed(2)+ "C";
        document.getElementById("cont").innerHTML =data.sys.country;
    })
})
}
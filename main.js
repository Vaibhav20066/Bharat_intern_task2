const celEl = document.getElementById("celsius");
const fahEl = document.getElementById("fahrenheit");
const kelEl = document.getElementById("kelvin");

const computeTemp = (event)=>{
    // console.log(event.target.name);
    // console.log(event.target.value);

    const currValue = +event.target.value;
    let key = event.target.name;
    switch (key) {
        case "celsius":
            kelEl.value = (currValue + 273.15).toFixed(2);
            fahEl.value = ((currValue *1.8) + 32).toFixed(2);
            break;
        case "fahrenheit":
            celEl.value = ((currValue -32)/1.8).toFixed(2);
            // kelEl.value = (currValue+ 459.67)*0.55;
            kelEl.value = (+(celEl.value) + 273.15).toFixed(2);
            break;
        case "kelvin":
            celEl.value = (currValue - 273.15).toFixed(2);
            fahEl.value = ((celEl.value *1.8) + 32).toFixed(2);
            break;
    
        default:
            break;
    }
}
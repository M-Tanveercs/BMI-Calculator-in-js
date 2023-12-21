const form1 = document.querySelector("#form1");
console.log(form1);
const form2 = document.querySelector("#form2");
console.log(form2);
const btn1 = document.querySelector("#Standard");
const btn2 = document.querySelector("#Metric");

  form2.style.display = "none";
btn1.addEventListener("click", () => {
     document.querySelector("#container").style.backgroundColor = "#797978";
        document.querySelector("#container").style.color = "black";
    form2.style.display="none"
     form1.style.display = "block";
});
btn2.addEventListener("click", () => {
   document.querySelector("#container").style.backgroundColor = "blue";
   document.querySelector("#container").style.color = "white";
  form1.style.display = "none";
      form2.style.display = "block";
});
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector("#StHeight").value);
  
  console.log(height);
  const weight = parseInt(document.querySelector("#STweight").value);
  console.log(weight);
  const results = document.querySelector("#STresults");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    height=height*12;
    console.log(height);
    const bmi = ((weight / (height * height) )* 703).toFixed(2);
    console.log(bmi);
    results.innerHTML = `<span>${bmi}</span>`;
     let message = document.querySelector("#message1");
     console.log(message);
  if(bmi<18.6){
    console.log("under");
    message.innerHTML=`Your are Under Weight. Please keep attention on your Health!!`
  }else if(bmi >18.6 && bmi<24.9){
    console.log("normal");
    message.innerHTML="Your Weight is Normal"
  }else if(bmi>24.9){
    console.log("over");
message.innerHTML="Your are OverWeight. Please Keep attention on Your Health!! "
  }else{
    message.innerHTML="invalid input"
  }
  }
 
});

form2.addEventListener("submit", function (e) {
  e.preventDefault();
 
  const height = parseInt(document.querySelector("#height").value);
  console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(weight);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
        let message = document.querySelector("#message");
        console.log(message);
        if (bmi < 18.6) {
          console.log("under");
          message.innerHTML = `Your are Under Weight. Please keep attention on your Health!!`;
        } else if (bmi > 18.6 && bmi < 24.9) {
          console.log("normal");
          message.innerHTML = "Your Weight is Normal";
        } else if (bmi > 24.9) {
          console.log("over");
          message.innerHTML =
            "Your are OverWeight. Please Keep attention on Your Health!! ";
        } else {
          message.innerHTML = "invalid input";
        }
  }
});

const form = document.querySelector("form");
// console.log(form)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please input correct value in Height ${height}`;
  } else if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please input correct value in Weight ${weight}`;
  } else{
    let bmi = (weight / ((height*height) / 10000)).toFixed(2);
    if(bmi >= 0 && bmi <= 18.60){
      result.innerHTML = `Your are under weight <span>${bmi}</span>`;
    }
    else if(bmi >=18.60  && bmi <= 24.90){
      result.innerHTML = `Your are normal weight <span>${bmi}</span>`;
    }
    else{
      result.innerHTML = `Your are over weight <span>${bmi}</span>`;
    }
  }
});

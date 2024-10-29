let age = prompt("enter ur age");
let type = prompt("enter movie type(regular or 3D)");
let time = prompt("enter time of day(matinee or evening)");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  switch (true) {
    case age <= 10:
      alert = "ბილეთის ფასი 5 ლარი";
      break;
    case age > 10 && age <= 65:
      alert = "biletis fasi 15";
      break;
    case age > 65:
      alert = "bileti 10";
      break;
    default:
      break;
  }
  
});

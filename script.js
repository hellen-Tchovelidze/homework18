let age = prompt("enter ur age");
let type = prompt("enter movie type(regular or 3D)");
let time = prompt("enter time of day(matinee or evening)");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  switch (true) {
    case age <= 10 && type === "3D" && time === "evening":
      alert("ბილეთის ფასი იქნება 15 ლარი");
      break;
    case age <= 10 && type === "3D":
      alert("ბილეთის ფასი იქნება 10 ლარი");
      break;
    case age <= 10:
      alert("ბილეთის ფასი 5 ლარი");
      break;
    case age > 10 && age <= 65 && type === "3D" && time === "evening":
      alert("ბილეთის ფასი 25 ლარი");
      break;
    case age > 10 && age <= 65 && type === "3D":
      alert("ბილეთის ფასი 20 ლარი");
      break;
    case age > 10 && age <= 65:
      alert("ბილეთის ფასი 15 ლარი");
      break;
    case age > 65 && type === "3D" && time === "evening":
      alert("ბილეთის ფასი 20 ლარი");
      break;
    case age > 65 && type === "3D":
      alert("ბილეთის ფასი 15 ლარი");
      break;
    case age > 65:
      alert("ბილეთის ფასი 10 ლარი");
      break;

    default:
      break;
  }
});

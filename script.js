let age = prompt("enter ur age");
let type = prompt("enter movie type(regular or 3D)");
let time = prompt("enter time of day(matinee or evening)");
let btn = document.getElementById("btn");
let hasCoupon = prompt("Do you have a coupon for 25% off? (yes or no)");
btn.addEventListener("click", () => {
  switch (true) {
    case age <= 10 &&
      type === "3D" &&
      time === "evening" &&
      hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 11.25 ლარი "
      );
      break;

    case age <= 10 && type === "3D" && time === "evening":
      alert("ბილეთის ფასი იქნება 15 ლარი");
      break;
    case age <= 10 && type === "3D" && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 7.5 ლარი"
      );
      break;
    case age <= 10 && type === "3D":
      alert("ბილეთის ფასი იქნება 10 ლარი");
      break;
    case age <= 10 && time === "evening" && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 7.5 ლარი"
      );
      break;
    case age <= 10 && time === "evening":
      alert("ბილეთის ფასი იქნება 10 ლარი");
      break;
    case age <= 10 && hasCoupon === "yes":
      alert(
        " თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 3.75 ლარი"
      );
      break;
    case age <= 10:
      alert("ბილეთის ფასი 5 ლარი");
      break;
    case age > 10 &&
      age <= 65 &&
      type === "3D" &&
      time === "evening" &&
      hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 18.75 ლარი "
      );
      break;
    case age > 10 && age <= 65 && type === "3D" && time === "evening":
      alert("ბილეთის ფასი 25 ლარი");
      break;
    case age > 10 && age <= 65 && type === "3D" && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 15 ლარი"
      );
      break;
    case age > 10 && age <= 65 && type === "3D":
      alert("ბილეთის ფასი 20 ლარი");
      break;
    case age > 10 && age <= 65 && time === "evening" && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 15 ლარი"
      );
      break;
    case age > 10 && age <= 65 && time === "evening":
      alert("ბილეთის ფასი 20 ლარი");
      break;
    case age > 10 && age <= 65 && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 11.25 ლარი"
      );
      break;
    case age > 10 && age <= 65:
      alert("ბილეთის ფასი 15 ლარი");
      break;
    case age > 65 && type === "3D" && time === "evening" && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 15 ლარი"
      );
      break;
    case age > 65 && type === "3D" && time === "evening":
      alert("ბილეთის ფასი 20 ლარი");
      break;
    case age > 65 && type === "3D" && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 11.25 ლარი"
      );
      break;
    case age > 65 && type === "3D":
      alert("ბილეთის ფასი 15 ლარი");
      break;
    case age > 65 && time === "evening" && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 11.25 ლარი"
      );
      break;
    case age > 65 && time === "evening":
      alert("ბილეთის ფასი 15 ლარი");
      break;
    case age > 65 && hasCoupon === "yes":
      alert(
        "თქვენ გაქვთ ფასდაკლების  25% კუპონი და ბილეთის ფასი იქნება 7.5 ლარი"
      );
      break;
    case age > 65:
      alert("ბილეთის ფასი 10 ლარი");
      break;

    default:
      alert("ERROR");
      break;
  }
});

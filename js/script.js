const userNameElem = document.getElementById("name");
console.log(userNameElem);

const userKmElem = document.getElementById("userkm");
console.log(userKmElem);

const userAgeElem = document.getElementById("age");
console.log(userAgeElem);

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function(){

  // Raccolta dati
  const userName = userNameElem.value;
  const userKm = userKmElem.value;
  const userAge = userAgeElem.value;
  console.log(userName, userKm, userAge);

  // Calcolo scontistiche
  const ticketPriceKm = 0.21;
  const ticketPriceTotal = ticketPriceKm * userKm;
  console.log(ticketPriceTotal.toFixed(2))

  let discount = "";
  let toalPrice = "";

  if (userAge === "over-65") {
    discount = (ticketPriceTotal / 100) * 40;
    console.log(discount);
    totalPrice = (ticketPriceTotal - discount);
    console.log(totalPrice);
  } else if (userAge === "minorenne") {
    discount = (ticketPriceTotal / 100) * 20;
    console.log(discount);
    totalPrice = (ticketPriceTotal - discount);
    console.log(totalPrice);
  } else {
    discount = 0
    totalPrice = (ticketPriceTotal - discount);
    console.log(totalPrice);
  }
  
})

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
  let message = "";

  if (userAge === "over-65") {
    discount = (ticketPriceTotal / 100) * 40;
    totalPrice = (ticketPriceTotal - discount);
    message = "Biglietto agevolato over-65"
  } else if (userAge === "minorenne") {
    discount = (ticketPriceTotal / 100) * 20;
    totalPrice = (ticketPriceTotal - discount);
    message = "Biglietto agevolato under-18"
  } else {
    discount = 0
    totalPrice = (ticketPriceTotal - discount);
    message = "Biglietto standard"
  }

  // Preparazione messaggio
  const userNameTicket = (userName);
  const priceOfTicket = (`${totalPrice.toFixed(2)}€`);
  const userMessage = (message)

  // Output
  document.getElementById("name-user").innerHTML = userNameTicket;
  document.getElementById("price-of-ticket").innerHTML = priceOfTicket;
  document.getElementById("type-of-ticket").innerHTML = userMessage;
});

const clearBtn = document.getElementById("clear").addEventListener("click", function () {
  userNameElem.value = "";
  userKmElem.value = "";
  userAgeElem.value = "";
  document.getElementById("name-user").innerHTML = "";
  document.getElementById("price-of-ticket").innerHTML = "";
  document.getElementById("type-of-ticket").innerHTML = "";
});

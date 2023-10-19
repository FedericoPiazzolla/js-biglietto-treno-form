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
})

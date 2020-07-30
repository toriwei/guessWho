/* global cssi */

function displayCssiMember(member) {
  let newDiv = document.createElement("DIV");
  newDiv.className = "card";
  newDiv.width = "300";
  newDiv.style = "width: 9rem;";
  let img = new Image(),
    url = member.photoUrl,
    container = document.getElementById("imageDisplay");

  let divBody = document.createElement("DIV");
  divBody.className = "card-body";

  let memberName = document.createElement("p");
  memberName.textContent = member.name;
  memberName.className = "card-text";

  divBody.appendChild(memberName);
  img.onload = function() {
    newDiv.appendChild(img);
    newDiv.appendChild(divBody);
    container.appendChild(newDiv);
  };
  img.src = url;
  img.className = "card-img-top";
  img.height = "150";
  
  let isGrayscale = false;
  img.onclick = function() {
    isGrayscale = !isGrayscale;
    if (isGrayscale) {
      img.style.filter = "grayscale(100)";
    } else {
      img.style.filter = "grayscale(0)";
    }
  };
}

function listNamesForChoosing(member) {
  let list = document.querySelector("#exampleFormControlSelect1");
  let option = document.createElement("option");
  option.innerText = member.name;
  list.appendChild(option);
}

let chooseCelebForm = document.querySelector("#celebForm");
let chooseCeleb = document.querySelector("#exampleFormControlSelect1");
let memberChosen = document.querySelector("#celebChosenTitle");

chooseCelebForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = chooseCeleb.value;
  memberChosen.innerText = `You chose: ${name}`;
});

for (let member of cssi) {
  displayCssiMember(member);
  listNamesForChoosing(member);
}

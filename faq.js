stainSecObj = {
  liquidStain: [
    `Pour white vinegar and warm water into a large container`,
    `Using a clean cloth, apply this vinegar and water solution directly onto the water stained area of your carpet`,
    `Let the rug dry and call us or send us an email for a better study solution from our professionals`,
  ],
  foodStain: [
    `Food white vinegar and warm water into a large container`,
    `Food a clean cloth, apply this vinegar and water solution directly onto the water stained area of your carpet`,
    `Food the rug dry and call us or send us an email for a better study solution from our professionals`,
  ],
  mudStain: [
    `mud white vinegar and warm water into a large container`,
    `mud a clean cloth, apply this vinegar and water solution directly onto the water stained area of your carpet`,
    `mud the rug dry and call us or send us an email for a better study solution from our professionals`,
  ],
};

const stainList = document.getElementById("stainSecList");
const stainElements = document.getElementsByClassName("stainExampleDiv");


function selectText(textName) {
  stainList.innerHTML = "";
  const list = stainSecObj[textName];
  console.log(list);
  list.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element;
    stainList.appendChild(li);
  });
}

function handleClick(event) {
  let id;
  if (event.target.id) {
    id = event.target.id;
  } else {
    id = event.target.parentElement.id;
  }
  selectText(id);
}

console.log(stainElements[0]);
//  stainElements.forEach(element =>  element.addEventListener("click", handleClick));
stainElements[0].addEventListener("click", handleClick);
stainElements[1].addEventListener("click", handleClick);
stainElements[2].addEventListener("click", handleClick);

$(document).ready(() => {
  const questions = $(".questions");

  questions.each(function () {
    $(this).click(function () {
      $(this.nextElementSibling).slideToggle("slow");
    });
  });
});

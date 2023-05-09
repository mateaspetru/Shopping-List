const input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const ul = document.querySelector("ul");
let deleteBtn = document.querySelectorAll(".delete");

addBtn.addEventListener("click", createElements);

function createElements() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("button");

  if (input.value != "") {
    deleteBtn.classList.add("delete", "button");
    deleteBtn.innerHTML = "Delete";
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    span.appendChild(p);

    p.innerHTML = input.value;
    input.value = "";
  } else {
    alert(`Nu ati introdus nimic`);
  }
}

ul.addEventListener("click", function (e) {
  if ((e.target.className == "delete", "button")) {
    const li = e.target.parentElement;
    ul.removeChild(li);
  }
});

//getting user data input
let userName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let date = document.getElementById("date");
let time = document.getElementById("time");

function addInput(e) {
  e.preventDefault();

  if (
    userName.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    date.value === "" ||
    time.value === ""
  ) {
    alert("Please enter all fields");
  } else {
    alert("Details saved to local storage");
    const details = {
      Name: userName.value,
      Email: email.value,
      Phone: phone.value,
      Date: date.value,
      Time: time.value,
    };

    //saving to local storage
    localStorage.setItem(userName.value, JSON.stringify(details));

    ///display on screen

    //creating
    let div = document.createElement("div");

    //creating text
    div.appendChild(document.createTextNode(userName.value));
    div.appendChild(document.createTextNode("🔶" + email.value + "🔶"));
    div.appendChild(document.createTextNode(phone.value + "🔶"));
    div.appendChild(document.createTextNode(date.value + " "));

    //styling the text
    div.style.fontWeight = "bold";
    div.style.textAlign = "center";
    div.style.color = "brown";

    //creating an delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", onDelete);

    //style delete button
    deleteButton.style.color = "red";
    deleteButton.style.borderColor = "red";
    div.appendChild(deleteButton);

    //creating an edit button
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", onEdit);

    //style delete button
    editButton.style.color = "green";
    editButton.style.borderColor = "green";
    div.appendChild(editButton);

    form.after(div);
  }
}

// DELETE BUTTON FUNCTIONALITY
function onDelete() {
  const div = this.parentNode;
  // console.log(div)
  const name = div.childNodes[0].nodeValue.trim();
  // console.log(name)
  localStorage.removeItem(name);
  div.remove();
}

//Edit Button Functionality

function onEdit() {
  const div = this.parentNode;
  const divName = this.parentNode.childNodes[0].nodeValue.trim();
  const details = JSON.parse(localStorage.getItem(divName));
  userName.value = details.Name;
  email.value = details.Email;
  phone.value = details.Phone;
  date.value = details.Date;
  time.value = details.Time;
  localStorage.removeItem(divName);
  div.remove();
}

const form = document.getElementById("myform");
form.addEventListener("submit", addInput);

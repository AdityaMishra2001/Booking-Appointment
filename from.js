function addInput(e) {
  e.preventDefault();

  //getting user data input
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let date = document.getElementById("date");
  let time = document.getElementById("time");

  if (
    name.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    date.value === "" ||
    time.value === ""
  ) {
    alert("Please enter all fields");
  } else {
    alert("Details saved to local storage");
    const details = {
      Name: name.value,
      Email: email.value,
      Phone: phone.value,
      Date: date.value,
      Time: time.value,
    };

    //saving to local storage
    localStorage.setItem(name.value, JSON.stringify(details));

    //display on screen

    //creating
    let div = document.createElement("div");

    div.appendChild(document.createTextNode(name.value));
    div.appendChild(document.createTextNode("🔶" + email.value + "🔶"));
    div.appendChild(document.createTextNode(phone.value + "🔶"));
    div.appendChild(document.createTextNode(date.value + " "));

    //styline the text
    div.style.fontWeight = "bold";
    div.style.textAlign = "center";
    div.style.color = "brown";

    form.after(div);
  }
}

const form = document.getElementById("myform");
form.addEventListener("submit", addInput);

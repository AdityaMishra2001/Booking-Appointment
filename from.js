const form = document.getElementById("myform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fd = new FormData(form);

  const obj = Object.fromEntries(fd);

  let myobj_serialized = JSON.stringify(obj);
  localStorage.setItem("form", myobj_serialized);

  // console.log(localStorage);

  // let myobj_dserialized = JSON.parse(localStorage.getItem("form"));
  // console.log(myobj_dserialized);
});

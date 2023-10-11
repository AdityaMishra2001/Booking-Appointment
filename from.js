document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  console.log("Name:", name1);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Date:", date);
  console.log("Time:", time);
});

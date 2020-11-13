function showPassword() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function setField() {
  var selector = document.getElementById("contactType");
  var selectorVal = selector.options[selector.selectedIndex].text;
  var field = document.getElementById("contactVal");
  var label = document.getElementById("contactLabel");
  console.log(selectorVal);
  if (selectorVal == "email") {
    field.type = "email";
    label.innerHTML = "Email";
    field.setAttribute("placeholder", "name.lastname@email.com");
    field.value = "";
    // field.placeholder = "name.lastname@email.com";
  } else if (selectorVal == "phone") {
    field.type = "tel";
    label.innerHTML = "Phone";
    field.setAttribute("pattern", "[0-9]{10}");
    field.setAttribute("placeholder", "0412345678");
    field.value = "";
    // field.pattern = "[0-9]{10}";
    // field.placeholder = "0412345678";
  } else {
    field.type = "text";
    label.innerHTML = "Social";
    field.setAttribute("pattern", "[0-9]{10}");
    field.setAttribute("placeholder", "social.com/account");
    field.value = "";
    // field.placeholder = "social.com/account";
  }
}
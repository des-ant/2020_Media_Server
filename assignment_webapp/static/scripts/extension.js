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
  var telMsg = document.getElementById("telMsg");
  if ("email".localeCompare(selectorVal, 'en', { sensitivity: 'base' }) == 0) {
    label.innerHTML = "Email";
    field.type = "email";
    field.removeAttribute("pattern");
    field.setAttribute("placeholder", "name.lastname@email.com");
    field.value = "";
    telMsg.innerHTML = "";
  }
  if ("phone".localeCompare(selectorVal, 'en', { sensitivity: 'base' }) == 0) {
    label.innerHTML = "Phone";
    field.type = "tel";
    field.setAttribute("pattern", "[0-9]{10}");
    field.setAttribute("placeholder", "0412345678");
    field.value = "";
    telMsg.innerHTML = "Phone number format: 0412345678";
  }
  if ("social".localeCompare(selectorVal, 'en', { sensitivity: 'base' }) == 0) {
    label.innerHTML = "Social";
    field.type = "text";
    field.removeAttribute("pattern");
    field.setAttribute("placeholder", "social.com/account");
    field.value = "";
    telMsg.innerHTML = "";
  }
}